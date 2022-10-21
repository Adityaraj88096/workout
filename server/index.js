const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const connectDB = require('../db/db');
const exerciseRouter = require('../routes/exercise.router');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
connectDB();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// app.use(cors());

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use(exerciseRouter)

app.listen(port, () => {
    console.log(`Your backend server has started`)
});