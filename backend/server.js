const express = require('express');
const mongoose = require('mongoose');

const app = express();
const models = require('./models/models')

mongoose.connect('mongodb://localhost:27017/crud_v01', {
  useNewUrlParser: true,
});
mongoose.connection.once('open', () => {
  console.log('DB IS CONNECTED :)');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`SERVER ARE WORKING ON http://localhost:${PORT}`);
});