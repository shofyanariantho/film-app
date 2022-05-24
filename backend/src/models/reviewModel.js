const { Model } = require("objection");

class Review extends Model {
    static get tableName() {
        return "reviews"
    }

    static get relationMappings() {
        const User = require('./usersModel')

        return {
            user: {
                relation: Model.HasManyRelation,
                modelClass: User,
                join: {
                    from: 'id',
                    to: 'user_id'
                }
            }
        }
    };
}

module.exports = Review;