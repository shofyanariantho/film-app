const { Model } = require("objection");

class Profile extends Model {
    static get tableName() {
        return "profiles"
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
            required: ["mobile"],
    
            properties: {
                id: { type: "integer" },
                mobile: { type: "string", minLength: 2 },
            },
        };
    }

    static get relationMappings() {
        const User = require('./usersModel')

        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'id',
                    to: 'user_id'
                }
            }
        }
    };
}

module.exports = Profile;