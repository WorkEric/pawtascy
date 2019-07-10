const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    } = require('graphql');

const db = require('../../models/index.js');
const { UserProfile } = require('../types/UserProfile.js');

const updateUserProfile = {
    type: UserProfile,
    args: {
        user_id: { type: GraphQLNonNull(GraphQLInt) },
        location_id: { type: GraphQLInt},
        gender: { type: GraphQLString },
        age: { type: GraphQLString },
        job: { type: GraphQLString },
        phone: { type: GraphQLString },
        address: { type: GraphQLString },
        avatar: { type: GraphQLString },
        self_introduction: { type: GraphQLString } 
    },
    resolve (_, args) {
        let user_id = args.user_id
        delete args.user_id;
        return db.user_profile.update(
            args,
            { where: { user_id } }
        ).then(() => {
            return db.user_profile.findOne({ where: {user_id: user_id}})
        })
    }
}

module.exports = {
    updateUserProfile
}
