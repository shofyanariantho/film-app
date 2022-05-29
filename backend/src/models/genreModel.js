const { Model } = require("objection");

class Genre extends Model {
  static get tableName() {
    return "genres";
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
      required: ["genre_name"],

      properties: {
        id: { type: "integer" },
        genre_name: { type: "string", minLength: 2 },
      },
    };
  }
}

module.exports = Genre;
