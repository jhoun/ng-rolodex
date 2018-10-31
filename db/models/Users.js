const bookshelf = require('./booshelf.js');

const Users = bookshelf.Model.extend({
  tableName: 'users',
  idAttribute: 'user_id',
  hasTimeStamps: true
})

module.exports = Users;