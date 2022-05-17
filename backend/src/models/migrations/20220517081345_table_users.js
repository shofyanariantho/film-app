/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', (table) =>{
        table.increments('id').primary()
        table.string('user_password', 8)
        table.string('user_name', 255)
        table.string('user_email', 50)
        table.timestamps()
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
