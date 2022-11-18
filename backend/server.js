const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

const URI = process.env.ATLAS_URI;
mongoose.connect(URI,
    err => {
      if(err) throw err;
      console.log(`connected to MongoDB`)
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully.")
});

app.get('/', (req, res) => {
  res.render('index.ejs', { name: 'Kyle'})
})

app.get('/login', (req, res) => {
  res.render('login.ejs')
})

app.post('/login', (req, res) => {
  
})

app.get('/register', (req, res) => {
  res.render('register.ejs')
})

app.post('/register', (req, res) => {
  req.body.name
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});