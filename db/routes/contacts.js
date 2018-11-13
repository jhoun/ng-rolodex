const express = require('express');
const router = express.Router();
const Contacts = require('../models/Contacts.js')


router.route('/contacts')
  .get((req, res) => {
   const {user_id} = req.user;
   console.log('created_by', user_id);
    Contacts
      .where('created_by', user_id)
      .fetchAll()
      .then(result => {
        res.send(result);
      })
      .catch(err=> {
        console.log('err', err);
      })
  })
  .post((req, res) => {
    const payload = {...req.body, created_by: req.user.user_id};

    Contacts
      .forge(payload)
      .save()
      .then(result => {
        res.send({...result, hasCreated: true})
      })
      .catch(err =>  {
        console.log('err', err);
        res.send('error');
      })
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