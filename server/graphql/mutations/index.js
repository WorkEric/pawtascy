const { GraphQLObjectType } = require('graphql');

const { createLocation, updateLocation } = require('./Location.js');

module.exports = new GraphQLObjectType({
    name: 'Mutation',
    fields() {
        return {
            createLocation,
            updateLocation,
        }
    }
})