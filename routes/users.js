const express = require('express');
const router = express.Router();
const Users = require('../db/models/Users.js')

router.route('/profile')
  .get((req, res) => {
    Users
      .where(req.params)
      .fetchAll()
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log('err', err);
        res.send(err)
      })
  })

router.route('/users')
  .put((req, res) => {
    const {name , email, address} = req.body;
    Users
      .where(req.params)
      .fetch()
      .then(userData => {
        return userData.save({name, email, address})
      })
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log('err', err);
        res.send(err);
      })
  })

router.route('/login')
  .post((req,res) => {

  })

router.route('/logout')
  .post((req, res) => {

  })

router.route('/register')
  .post((req, res) => {

  })



module.exports = router;