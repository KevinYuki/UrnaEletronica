
exports.up = function(knex) {
    return knex.schema.createTable('voto', table => {
        table.integer('num_candidato').notNull().references('num_candidato').inTable('candidato')
        table.string('hash').notNull()
        table.string('rehash').notNull()
        table.primary(['num_candidato', 'hash'], 'pk_voto')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('voto')
};
