exports.up = function (knex) {
  return knex.schema.createTable('messages', function (table) {
    table.increments();
    table.string('message').notNullable();

    table.string('hero_cpf').notNullable();
    table.foreign('hero_cpf').references('cpf').inTable('heros');

    table.string('owner_id').notNullable();

    table.string('ong_id').notNullable();
    table.foreign('ong_id').references('id').inTable('ongs');

    table.string('incident_id').notNullable();
    table.foreign('incident_id').references('id').inTable('incidents');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('messages');
};
