const { Model } = require("objection");

class Director extends Model {
  static get tableName() {
    return "directors";
  }
}

module.exports = Director;
