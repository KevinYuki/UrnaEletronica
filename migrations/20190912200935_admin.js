
exports.up = function(knex) {
    return knex.schema.createTable('admin', table => {
        table.increments('id').primary()
        table.string('username').notNull().unique()
        table.string('password').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('admin')
};
