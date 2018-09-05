const express = require('express');
const User = express.Router();

User.get('/', (req, res) => {
  res.json({
    code: 1,
    data: 'user success'
  })
});

module.exports = User;
