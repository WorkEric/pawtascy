const { GraphQLObjectType } = require('graphql');

const { createLocation, updateLocation } = require('./Location.js');
const { createUser, updateUser } = require('./User.js');
const { updateUserProfile } = require('./UserProfile.js');
const { createPetProfile, updatePetProfile } = require('./PetProfile.js');

module.exports = new GraphQLObjectType({
    name: 'Mutation',
    fields() {
        return {
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
            updatePetProfile
        }
    }
});