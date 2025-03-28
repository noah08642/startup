const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();
const DB = require('./database.js');

const authCookieName = 'token';

// The users are saved in memory and disappear whenever the service is restarted.
let users = [];


// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use('/api', apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await findUser('email', req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);

    setAuthCookie(res, user.token);
    res.send({ email: user.email });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = await findUser('email', req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      user.token = uuid.v4();
      await DB.updateUser(user);
      setAuthCookie(res, user.token);
      res.send({ email: user.email });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    delete user.token;
    DB.updateUser(user);
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// Middleware to verify that the user is authorized to call an endpoint
const verifyAuth = async (req, res, next) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    console.log('user: ', user)
    req.user = user;
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
};


// Middleware to check authentication (simplified)
// const authMiddleware = async (req, res, next) => {
//   const token = req.headers.authorization;
//   if (!token) return res.status(401).json({ message: 'Unauthorized' });
//   const user = await findUser('token', req.cookies[authCookieName]);
//   if (!user) return res.status(401).json({ message: 'Unauthorized' });
//   req.user = user;
//   next();
// };

app.post('/api/posts', verifyAuth, async (req, res) => {
  console.log('made it inside of app.post /api/posts.  About to check auth');
  console.log('printing req.user.email: ', req.user.email);
  if (req.user.email !== 'lukerichards8') {            // Restrict to only me!
    return res.status(403).json({ message: 'Forbidden' });
  }
  const blogPost = {
    title: req.body.title,
    content: req.body.content,
    author: req.user.email,
    date: new Date(),
  };
  const result = await DB.addPost(blogPost);
  res.status(201).json({ id: result.insertedId });
});

// handle search for id, return blog post text
apiRouter.get('/posts/:id', async (req, res) => {
  const id = req.params.id;
  const blogPost = await DB.getPost(id);
  if (blogPost) {
    res.json(blogPost);
  } else {
    res.status(404).json({ message: 'Not Found' });
  }
});




// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await DB.addUser(user);

  return user;
}

async function findUser(field, value) {
  if (!value) return null;

  if (field === 'token') {
    return DB.getUserByToken(value);
  }
  return DB.getUser(value);
}

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

