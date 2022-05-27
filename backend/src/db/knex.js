const knex = require("knex");
const knexconfig = require("./knexfile");
const { Model } = require("objection");

function setupDb() {
  const db = knex(knexconfig[process.env.NODE_ENV || "development"]);
  Model.knex(db);
}

module.exports = setupDb;
