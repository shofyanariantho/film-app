const { Model } = require("objection");

class Film extends Model {
  static get tableName() {
    return "films";
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
      required: [
        "description",
        "user_id",
        "actor_id",
        "genre_id",
        "director_id",
        "review",
      ],

      properties: {
        id: { type: "integer" },
        description: { type: "string", minLength: 2 },
        user_id: { type: "integer" },
        actor_id: { type: "integer" },
        genre_id: { type: "integer" },
        director_id: { type: "integer" },
        review: { type: "string", minLength: 2 },
        film_image: { type: ["string", "null"] },
      },
    };
  }

  // static relationMappings() {
  //   const User = require("./usersModel");
  //   const Actor = require("./actorModel");
  //   const Review = require("./reviewModel");
  //   const Genre = require("./genreModel");
  //   const Director = require("./directorModel");

  //   return {
  //     // user: {
  //     //   relation: Model.HasManyRelation,
  //     //   modelClass: User,
  //     //   join: {
  //     //     from: "id",
  //     //     to: "user_id",
  //     //   },
  //     // },

  //     actor: {
  //       relation: Model.BelongsToOneRelation,
  //       modelClass: Actor,
  //       join: {
  //         from: "films.actor_id",
  //         to: ["actors.id", "actors.actor_name"],
  //       },
  //     },

  //     //     review: {
  //     //       relation: Model.HasManyRelation,
  //     //       modelClass: Review,
  //     //       join: {
  //     //         from: "id",
  //     //         to: "review_id",
  //     //       },
  //     //     },
  //     //     genre: {
  //     //       relation: Model.HasManyRelation,
  //     //       modelClass: Genre,
  //     //       join: {
  //     //         from: "id",
  //     //         to: "genre_id",
  //     //       },
  //     //     },
  //     //     director: {
  //     //       relation: Model.HasManyRelation,
  //     //       modelClass: Director,
  //     //       join: {
  //     //         from: "id",
  //     //         to: "director_id",
  //     //       },
  //     //     },
  //   };
  // }
}

module.exports = Film;
