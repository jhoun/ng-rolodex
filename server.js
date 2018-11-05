const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const routes = require('./routes');
const app = express();
const session = require('express-session');
const redistStore = require('connect-redis')(session);
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Users = require('./db/models/Users.js');
const bcrypt = require('bcrypt');
const { SESSION } = require('./config.json')

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: true}));

app.use(
  session({
    store: new redistStore({ logErrors: true }),
    secret: SESSION.SECRET,
    resave: false,
    saveUninitialized: true
  })
)

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(
    { usernameField: 'username', passwordField: 'password' },
    (username, password, done) => {
      Users.where({ username })
        .fetch()
        .then(user => {
          bcrypt
            .compare(password, user.attributes.password)
            .then(res => {
              if (res) {
                done(null, user);
              } else {
                done(null, false);
              }
            })
            .catch(err => {
              console.log('err', err);
            });
        })
        .catch(err => {
          console.log('err', err);
          done(err);
        });
    }
  )
);

passport.serializeUser((user, done) => {
  console.log('user', user);
  done(null, user.id);
});

passport.deserializeUser((user, done) => {
  console.log('user', user);
  return Users.where({ user_id: user })
    .fetch()
    .then(user => {
      const userAttributes = {
        user_id: user.attributes.user_id,
        email: user.attributes.username
      };
      done(null, userAttributes);
    });
});

app.use('/api', routes);


app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})