exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments('user_id').primary().notNullable();
    table.string('username').notNullable();
    table.timestamps(true, true);
    table.string('name');
    table.string('email');
    table.string('address');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
