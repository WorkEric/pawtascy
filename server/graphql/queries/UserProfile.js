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

const getUserProfileByLocation = {
    type: new GraphQLList(UserProfile),
    args: {
        city: {type: GraphQLString},
        state: {type: GraphQLString},
        country: {type: GraphQLString}
    },
    resolve(_, {city, state, country}) {
        return db.location.findOne({
            where: {
                city: city, 
                state: state, 
                country: country
            }
        }).then(function(location){
            return db.user_profile.findAll({
                where: {location_id: location.id},
            })
        })
    }
}

module.exports = {
    getUserProfiles,
    getUserProfileByUserId,
    getUserProfileByLocation,
}
