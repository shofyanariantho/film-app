const { Model } = require("objection"); // Objection model
const Film = require("./filmModel");
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

  static get relationMappings() {
    return {
      films: {
        relation: Model.HasManyRelation,
        modelClass: Film,
        join: {
          from: "actors.id",
          to: "films.actor_id",
        },
      },
    };
  }
}

module.exports = Actor;
