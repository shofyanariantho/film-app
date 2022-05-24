const { Model } = require("objection");

class Film extends Model {
    static get tableName() {
        return "films"
    }

    static get relationMappings() {
        const User = require('./usersModel')
        const Actor = require('./actor')
        const Review = require('./reviewModel')
        const Genre = require('./genreModel')
        const Director = require('./directorModel')

        return {
            user: {
                relation: Model.HasManyRelation,
                modelClass: User,
                join: {
                    from: 'id',
                    to: 'user_id'
                }
            },

            actor: {
                relation: Model.HasManyRelation,
                modelClass: Actor,
                join: {
                    from: 'id',
                    to: 'actor_id'
                }
            },

            review: {
                relation: Model.HasManyRelation,
                modelClass: Review,
                join: {
                    from: 'id',
                    to: 'review_id'
                }
            },

            genre: {
                relation: Model.HasManyRelation,
                modelClass: Genre,
                join: {
                    from: 'id',
                    to: 'genre_id'
                }
            },

            director: {
                relation: Model.HasManyRelation,
                modelClass: Director,
                join: {
                    from: 'id',
                    to: 'director_id'
                }
            }
        }
    };
}

module.exports = Film;