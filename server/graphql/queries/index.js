'use strict';

const { 
    GraphQLObjectType,
    GraphQLString, 
    GraphQLList,
} = require('graphql');

const { getLocations, getLocationByKeys } = require('./Location.js');
const { getUsers, getUserByUsername, getUserByEmail, getUserWithProfile, 
    getUserWithProfileById, getUserWithProfileByUsername, getUserPetByUsername,
    getUsersByPetProfileId, getHostUserbyEventId, getAttendeeUsersbyEventId,
    getUserWithProfileByEmail } = require('./User.js');
const { getUserProfiles, getUserProfileByUserId, getUserProfileByLocation } = require('./UserProfile.js')
const { getPetProfiles, getPetProfileById, getPetProfilesByCategory, 
    getPetProfilesByUsername } = require('./PetProfile.js')
const { getPetCategories, getPetCategoryById, getPetCategoriesByPetProfileId, getPetCategoriesByEventId } = require('./PetCategory.js')
const { getEvents, getEventById, getEventByLocationId, getEventByCity, getEventByUserId, 
    getEventByUserEmail, getHostEventsByUserId, getAttendeeEventsByUserId } = require('./Event.js')
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
            getUserWithProfileByEmail,
            getUsersByPetProfileId,
            getHostUserbyEventId,
            getAttendeeUsersbyEventId,

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
            getPetCategoriesByEventId,

            //Event
            getEvents,
            getEventById,
            getEventByLocationId,
            getEventByCity,
            getEventByUserId,
            getEventByUserEmail,
            getHostEventsByUserId,
            getAttendeeEventsByUserId,

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