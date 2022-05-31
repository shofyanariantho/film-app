const { Model } = require("objection");

class User extends Model {
  static get tableName() {
    return "users";
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
      required: ["password"],

      properties: {
        id: { type: "integer" },
        password: { type: "string", minLength: 6 },
      },
    };
  }
}

module.exports = User;