const express = require('express');
const router = express.Router();

const home = require('./home');
const user = require('./user');

router.use('/', home);
router.use('/user', user);

module.exports = router;
