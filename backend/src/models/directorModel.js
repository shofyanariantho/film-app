const { Model } = require("objection");

class Director extends Model {
  static get tableName() {
    return "directors";
  }

  $beforeInsert() {
    this.created_at = new Date();
  }

  $beforeUpdate() {
    this.updated_at = new Date();
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["director_name"],

      properties: {
        id: { type: "integer" },
        director_name: { type: "string", minLength: 2 },
        director_image: { type: ["string", "null"] },
      },
    };
  }
}

module.exports = Director;
