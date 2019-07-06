'use strict';

const { 
    GraphQLObjectType,
    GraphQLString, 
    GraphQLList,
} = require('graphql');

const { getLocations, getLocationByKeys } = require('./Location.js');
const { getUsers, getUserByUsername, getUserByEmail, getUserWithProfile, 
    getUserWithProfileById, getUserWithProfileByUsername, getUsersByPetProfileId } = require('./User.js');
const { getUserProfiles, getUserProfileByUserId, getUserProfileByLocation } = require('./UserProfile.js')
const { getPetProfiles, getPetProfileById, getPetProfilesByCategory, 
    getPetProfilesByUsername } = require('./PetProfile.js')
const { getPetCategories, getPetCategoryById, getPetCategoriesByPetProfileId } = require('./PetCategory.js')
const { getChatrooms, getChatroomByEventId} = require('./Chatroom.js')

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
            getUsersByPetProfileId,

            // UserProfile
            getUserProfiles,
            getUserProfileByUserId,
            getUserProfileByLocation,

            // PetProfile
            getPetProfiles,
            getPetProfileById,
            getPetProfilesByCategory,
            getPetProfilesByUsername,

            // PetCategory
            getPetCategories,
            getPetCategoryById,
            getPetCategoriesByPetProfileId,

            // Chatroom
            getChatrooms,
            getChatroomByEventId,
        }
    }
});