const { Model } = require("objection");

class Review extends Model {
    static get tableName() {
        return "reviews"
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
            required: ["comment"],
    
            properties: {
                id: { type: "integer" },
                comment: { type: "string", minLength: 2 },
            },
        };
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