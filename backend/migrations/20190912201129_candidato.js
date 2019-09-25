
exports.up = function(knex) {
    return knex.schema.createTable('candidato', table => {
        table.integer('num_candidato').primary()
        table.string('nome').notNull()
        table.string('nome_sup').notNull()
        table.string('partido').notNull()
        table.string('cargo').notNull()
        table.string('cidade').notNull()
        table.string('estado').notNull()
        table.string('foto')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('candidato')
};
