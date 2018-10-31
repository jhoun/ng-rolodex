const knex = require('../knex/knex.js');

// user bookshelf instance to create models
module.exports = require('bookshelf')(knex);