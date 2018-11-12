
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contacts', function(table){
    table.increments('contact_id').primary().notNullable();
    table.string('fullName').notNullable();
    table.string('address').notNullable();;
    table.string('mobile').notNullable();;
    table.string('work');
    table.string('home');
    table.string('email').notNullable();;
    table.string('twitter');
    table.string('instagram');
    table.string('github');
    table.integer('created_by').references('user_id').inTable('users').onDelete('cascade');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contacts');
};
