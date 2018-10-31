
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contacts', function(table){
    table.increments('contact_id').primary().notNullable();
    table.string('name').notNullable();
    table.timestamps(true, true);
    table.string('address');
    table.string('mobile');
    table.string('work');
    table.string('home');
    table.string('email');
    table.string('twitter');
    table.string('instagram');
    table.string('github');
    table.integer('created_by').references('user_id').inTable('users').onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contacts');
};
