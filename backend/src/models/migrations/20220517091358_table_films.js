/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("films", (table) => {
    table.increments("id").primary();
    table.string("description", 500);
    table.decimal("rating_film");
    table.integer("user_id").unsigned().references("id").inTable("users");
    table.integer("actor_id").unsigned().references("id").inTable("actors");
    table.integer("review_id").unsigned().references("id").inTable("reviews");
    table.integer("genre_id").unsigned().references("id").inTable("genres");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("films");
};
