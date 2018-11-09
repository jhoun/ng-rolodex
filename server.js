const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const routes = require('./routes');
const app = express();
const session = require('express-session');
const redisStore = require('connect-redis')(session);
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Users = require('./db/models/Users.js');
const bcrypt = require('bcrypt');
const { SESSION } = require('./config.json')

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use(
  session({
    store: new redisStore({ logErrors: true }),
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
  console.log('serialize', user.id);
  done(null, user.id);
});

passport.deserializeUser((user, done) => {
  console.log('deserialize', user);
  return Users.where({ user_id: user })
    .fetch()
    .then(user => {
      const userAttributes = {
        username: user.attributes.username,
        YOOOOOO: user.attributes.name
      };
      done(null, userAttributes);
    });
});


app.use('/api', routes);


app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})