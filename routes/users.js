const express = require('express');
const router = express.Router();
const Users = require('../db/models/Users.js')
const passport = require('passport');
const bcrypt = require('bcrypt');
const { SESSION } = require('../config.json')

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
  .post(passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/register'
  }),
  function(req, res) {
    res.send('authenticated');
  }
)

router.route('/logout')
  .post((req, res) => {
    req.session.destroy();
    res.send('logged Out');
  })

router.route('/register')
  .post((req, res) => {
    const { username, password , name, email, address} = req.body;
    bcrypt.hash(password, SESSION.SALTROUNDS ).then(hashedPassword => {
      Users.forge({ username , password: hashedPassword, name, email, address })
        .save()
        .then(result => {
          if (result) {
            res.redirect('./profile');
          } else {
            res.send('fail');
          }
        });
    });
  })



module.exports = router;