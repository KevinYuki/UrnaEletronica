
exports.up = function(knex) {
    return knex.schema.createTable('eleitor', table => {
        table.increments('id').primary()
        table.string('cpf').notNull()
        table.string('nome_completo').notNull().unique()
        table.string('cidade').notNull()
        table.string('estado').notNull()
        table.integer('votou').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('eleitor')
};
