const bookshelf = require('./bookshelf.js')

const Contacts = bookshelf.Model.extend({
  tableName: 'contacts',
  idAttribute: 'contact_id',
  hasTimestamps: true
})

module.exports = Contacts