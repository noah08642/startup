const { MongoClient, ObjectId } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('website');
const userCollection = db.collection('user');
const blogPostCollection = db.collection('blogPosts');
const emailCollection = db.collection('email');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  await userCollection.insertOne(user);
}

async function updateUser(user) {
  await userCollection.updateOne({ email: user.email }, { $set: user });
}

async function addPost(post) {
  const result = await blogPostCollection.insertOne(post);
  return result;
}

async function getPost(id) {
  return await blogPostCollection.findOne({ _id: new ObjectId(id) });
}

async function getAllPosts() {
  return await blogPostCollection.find({}, { projection: { _id: 1, title: 1 } })
    .sort({ date: -1 })  // Sort by date in descending order (most recent first)
    .toArray();
}

async function addEmail(email) {
  await emailCollection.insertOne(email)
}


module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  addPost,
  getPost,
  getAllPosts,
  addEmail
};
