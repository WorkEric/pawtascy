const { GraphQLObjectType } = require('graphql');

const { createLocation, updateLocation } = require('./Location.js');
const { createUser } = require('./User.js');

module.exports = new GraphQLObjectType({
    name: 'Mutation',
    fields() {
        return {
            // location
            createLocation,
            updateLocation,

            // user
            createUser,
        }
    }
});