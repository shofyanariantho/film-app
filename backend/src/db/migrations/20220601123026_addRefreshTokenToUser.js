/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable("users", (table) => {
    table.text("refreshToken");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  if (knex.schema.hasTable("users")) {
    knex.schema.alterTable("users", (table) => {
      table.dropColumn("refreshToken");
    });
  }
};
