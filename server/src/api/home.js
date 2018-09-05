const express = require('express');
const Home = express.Router();

Home.get('/', (req, res) => {
  res.json({
    code: 1,
    data: 'home success'
  })
});

module.exports = Home;
