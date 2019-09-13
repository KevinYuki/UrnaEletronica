
exports.up = function(knex) {
    return knex.schema.createTable('eleitor', table => {
        table.string('cpf').primary()
        table.string('nome_completo').notNull().unique()
        table.string('cidade').notNull()
        table.string('estado').notNull()
        table.integer('votou').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('eleitor')
};
