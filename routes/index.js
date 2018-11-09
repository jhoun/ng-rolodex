const express = require('express');
const router = express.Router();
const contacts = require('./contacts.js');
const users = require('./users.js');

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

router.use('/', users);
router.use('/', contacts);

module.exports = router;