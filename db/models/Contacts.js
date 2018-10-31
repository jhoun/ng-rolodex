const bookshelf = require('./bookshelf.js')

const Contacts = contacts.Model.extend({
  tableName: 'contacts',
  idAttribute: 'contact_id',
  hasTimestamps: true
})

module.exports = Contacts