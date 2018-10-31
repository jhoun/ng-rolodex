const express = require('express');
const router = express.Router();
const contacts = require('./contacts.js');
const users = require('./users.js');

router.use('/', users);
router.use('/', contacts);

module.exports = router;