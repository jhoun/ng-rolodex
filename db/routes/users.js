const express = require('express');
const router = express.Router();
const Users = require('../models/Users.js')
const passport = require('passport');
const bcrypt = require('bcrypt');
const { SESSION } = require('../../config.json')

router.route('/profile')
  .get((req, res) => {
    console.log('req.user', req.user);
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

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
     res.send(err);
    }
    if (!user) { return res.status(404).send(info.message); }
    req.logIn(user, function(err) {
      if (err) {
        return res.send(err);
      }
      return res.send();
    });
  })(req, res, next);
});

router.route('/logout')
  .post((req, res) => {
    req.session.destroy();
    return res.json('logged Out');
  })

router.route('/register')
  .post((req, res) => {
    const { username, password , name, email, address} = req.body;
    bcrypt.hash(password, SESSION.SALTROUNDS )
      .then(hashedPassword => {
        const payload = {
          username: username,
          password: hashedPassword,
          name: name,
          email: email,
          address: address
        }

        Users.forge(payload)
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