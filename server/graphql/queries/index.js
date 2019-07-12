'use strict';

const { 
    GraphQLObjectType,
    GraphQLString, 
    GraphQLList,
} = require('graphql');

const { getLocations, getLocationByKeys } = require('./Location.js');
const { getUsers, getUserByUsername, getUserByEmail, getUserWithProfile, 
    getUserWithProfileById, getUserWithProfileByUsername, getUserPetByUsername,
    getUsersByPetProfileId  } = require('./User.js');
const { getUserProfiles, getUserProfileByUserId, getUserProfileByLocation } = require('./UserProfile.js')
const { getPetProfiles, getPetProfileById, getPetProfilesByCategory, 
    getPetProfilesByUsername } = require('./PetProfile.js')
const { getPetCategories, getPetCategoryById, getPetCategoriesByPetProfileId } = require('./PetCategory.js')
const { getEvents, getEventById, getEventByLocationId} = require('./Event.js')
const { getEventFeedbacks, getEventFeedbackById, getEventFeedbackByUserId, getEventFeedbackByEventId, } = require('./EventFeedback.js')
const { getEventTopics, getEventTopicById, getEventTopicByOrderNumber,} = require('./EventTopic.js')

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
            getUserPetByUsername,
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

            //Event
            getEvents,
            getEventById,
            getEventByLocationId,

            //EventFeedback
            getEventFeedbacks,
            getEventFeedbackById,
            getEventFeedbackByUserId,
            getEventFeedbackByEventId,

            //EventTopic
            getEventTopics,
            getEventTopicById,
            getEventTopicByOrderNumber,
        }
    }
});