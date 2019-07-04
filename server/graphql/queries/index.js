'use strict';

const { 
    GraphQLObjectType,
    GraphQLString, 
    GraphQLList, 
} = require('graphql');

const { getLocations, getLocationByKeys } = require('./Location.js');
const { getUsers } = require('./User.js');

module.exports = new GraphQLObjectType({
    name: 'Query',
    fields: () => {
        return {
            // Location
            getLocations,
            getLocationByKeys,

            // User
            getUsers,
        }
    }
});