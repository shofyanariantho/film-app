/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('profiles', (table) =>{
        table.string('profile_id', 4).primary()
        table.integer('user_id').unsigned().references('id').inTable('users')
        table.string('profile_mobile')
        table.timestamps()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('profiles')
};
