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
      required: ["user_name", "user_email", "user_password"],

      properties: {
        id: { type: "integer" },
        user_name: { type: "string", minLength: 2 },
        user_email: { type: "string", minLength: 2 },
        user_password: { type: "string", minLength: 6 },
        confirm_password: { type: "string", minLength: 6 },
      },
    };
  }
}

module.exports = User;
