const { Model } = require("objection");

class Profile extends Model {
    static get tableName() {
        return "profiles"
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