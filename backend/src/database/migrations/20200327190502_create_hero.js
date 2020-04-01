exports.up = function (knex) {
  return knex.schema.createTable('heros', function (table) {
    table.string('cpf').primary();
    table.string('name').nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('heros');
};
