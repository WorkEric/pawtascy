const { 
    GraphQLString, 
    GraphQLList,
    GraphQLInt,
} = require('graphql');

const db = require('../../models/index.js');
const { UserProfile } = require('../types/UserProfile.js');

const getUserProfiles = {
    type: new GraphQLList(UserProfile),
    args: {},
    resolve(_, args) {
        return db.user_profile.findAll({
            subQuery: false
        })
    }
};

const getUserProfileByUserId = {
    type: UserProfile,
    args: {
        id: {type: GraphQLInt}
    },
    resolve(_, {id}) {
        return db.user_profile.findOne({
            where: {
                id:id
            }
        })
    }
}

module.exports = {
    getUserProfiles,
    getUserProfileByUserId,
}
