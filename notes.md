# CS 260 Notes

[My startup](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS Notes

Here are my notes for AWS

## HTML Notes

Here are my HTML Notes

## React Notes


```
export default [the thing that you're going to use elsewhere]

const [blobity, setBlobity] = useState(null)

useEffect(() => {
  logic
  logic
  logic
  setBlobity(poopity)
} , [the thing that triggers an updated useEffect.  empty brackets if only triggered once])

return (
  div box
    p blobity p
  div
)
```


## Service Notes

HTTP is built on to create NODE.js which is built upon to get Express.js
HTTP is web framework / protocol
NODE is for backend coding with JavaScript, using HTTP
Express simplifies NODE by creating more abstract objects that can call premade middleware (parsing json, ).

```
app = Express()

app.use('endpoint', ENTER_MIDDLEWARE_THING_HERE)

// for example:

app.use(/api, apiRouter)

apiRouter(/api/create, (req,res) => {
  info = req.body.info
  res.send("received info: ", info)
})

```
The req and res objects extend http.request and http.response.  The are served up by express each time a request is made.


If then render statements are used with the === and && operators:

```
// the statement following the && will only be evaluated if the first conditional statement is true.  It works like a 'then' statement.
{authState !== AuthState.Unknown && <h1>Welcome to Simon</h1>}
```


## Database Notes

MongoDB is very nice and can take almost any kind of object-like data.  This makes it really easy to store things like a "post" object.

```
Example usage:

const { MongoClient, ObjectId } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('website'); # 'website' is the name of the dataset
const blogPostCollection = db.collection('blogPosts');

async function addPost(post) {
  const result = await blogPostCollection.insertOne(post);
  return result;
}

async function getPost(id) {
  return await blogPostCollection.findOne({ _id: new ObjectId(id) });
}



### Index.js:

apiRouter.post('/posts', verifyAuth, async (req, res) => {
  // console.log('made it inside of app.post /api/posts.  About to check auth');
  // console.log('printing req.user.email: ', req.user.email);
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
```



