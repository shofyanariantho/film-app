const { Model } = require("objection"); // Objection model

class Actor extends Model {
  static get tableName() {
    return "actors";
  }
}

module.exports = Actor;
