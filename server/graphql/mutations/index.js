const { GraphQLObjectType } = require('graphql');

const { login } = require('./Auth');
const { createLocation, updateLocation } = require('./Location.js');
const { createUser, updateUser } = require('./User.js');
const { updateUserProfile } = require('./UserProfile.js');
const { createPetProfile, updatePetProfile } = require('./PetProfile.js');
const { createEventTopic, updateEventTopic} = require('./EventTopic.js');
const { createEvent, updateEvent} = require('./Event.js');
const { createEventFeedback, updateEventFeedback} = require('./EventFeedback.js');


module.exports = new GraphQLObjectType({
    name: 'Mutation',
    fields() {
        return {
            login,

            // location
            createLocation,
            updateLocation,

            // user
            createUser,
            updateUser,
            // user_profile
            updateUserProfile,

            // pet_profile
            createPetProfile,
            updatePetProfile,

            //event_topic
            createEventTopic,
            updateEventTopic,

            //event
            createEvent,
            updateEvent,

            
            //event_feedback
            createEventFeedback,
            updateEventFeedback,
        }
    }
});