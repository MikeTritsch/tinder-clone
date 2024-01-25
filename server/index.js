const PORT = 8000;
const express = require('express');
const { MongoClient } = require('mongodb');
const { v4: uuid } = require('uuid');
const uri = 'mongodb+srv://root:mongodb115@cluster0.9h9ocqu.mongodb.net/'


const app = express()

app.get('/', (req, res) => {
  res.json('Hello to my app!');
})

app.post('/signup', async (req, res) => {
  const client = new MongoClient(uri);
  const { email, password } = req.body;

  const generateUserId = uuidv4();
  const hashedpassword = await bcrypt.hash(password, 10);

  try {
    client.connect();
    const database = client.db('tinderClone');
    const users = database.collection('users');

    const existingUser = users.findOne({ email });

    if (existingUser) {
      return res.status(409).send("User already exists. Please login!");
    }

    const sanitizedEmail = email.toLowerCase();
    const data = {
      user_id: generateUserId,
      email: sanitizedEmail,
      hashed_password: hashedpassword
    }

    const insertedUser = await users.insertOne(data);
  }

})

app.get('/users', async (req, res) => {
  const client = new MongoClient(uri)

  try {
    await client.connect()
    const database = client.db('tinderClone');
    const users = database.collection('users');

    const returnedUsers = await users.find().toArray();
    res.send(returnedUsers);
  } finally {
    await client.close();
  }
})


app.listen(PORT, () => console.log('Server running on PORT ' + PORT))
