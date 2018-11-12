const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const routes = require('./db/routes');
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
    cookie: { secure: false },
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
                return done(null, user);
              } else {
                return done(null, false, { message: 'Password Not Found' });
              }
            })
            .catch(err => {
              return done(err)
            });
        })
        .catch(err => {
          return done(null, false, { message: 'No User Found' })
        });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((user, done) => {
  return Users.where({ user_id: user })
    .fetch()
    .then(user => {
      const userAttributes = {
        user_id: user.attributes.user_id,
      };
      done(null, userAttributes);
    });
});

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})