'use strict';

const { 
    GraphQLObjectType,
    GraphQLString, 
    GraphQLList,
} = require('graphql');

const { getLocations, getLocationByKeys } = require('./Location.js');
const { getUsers, getUserByUsername, getUserByEmail, getUserWithProfile, 
    getUserWithProfileById, getUserWithProfileByUsername } = require('./User.js');
const { getUserProfiles, getUserProfileByUserId, getUserProfileByLocation } = require('./UserProfile.js')

module.exports = new GraphQLObjectType({
    name: 'Query',
    fields: () => {
        return {
            // Location
            getLocations,
            getLocationByKeys,

            // User
            getUsers,
            getUserByUsername,
            getUserByEmail,
            getUserWithProfile,
            getUserWithProfileById,
            getUserWithProfileByUsername,

            // UserProfile
            getUserProfiles,
            getUserProfileByUserId,
            getUserProfileByLocation,
        }
    }
});