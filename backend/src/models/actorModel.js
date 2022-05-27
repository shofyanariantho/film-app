const { Model } = require("objection"); // Objection model

class Actor extends Model {
  static get tableName() {
    return "actors";
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
      required: ["actor_name"],

      properties: {
        id: { type: "integer" },
        actor_name: { type: "string", minLength: 2 },
        actor_image: { type: ["string", "null"] },
      },
    };
  }
}

module.exports = Actor;
