const express = require('express');
const router = express.Router();
const contacts = require('../db/models/Contacts.js')

router.route('/contacts')
  .get((req, res) => {

  })
  .post((req, res) => {

  })

router.route('/contacts/:id')
  .get((req, res) => {

  })
  .put((req, res) => {

  })
  .delete((req, res) => {

  })

router.route('/contacts/search/:term')
  .get((req, res) => {
    console.log('req.params', req.params);
    res.send(req.params)
  })



  module.exports = router;