'use strict';

const { 
    GraphQLObjectType,
    GraphQLString, 
    GraphQLList, 
} = require('graphql');

const { getLocations, getLocationByKeys } = require('./Location.js');

module.exports = new GraphQLObjectType({
    name: 'Query',
    fields: () => {
        return {
            getLocations,
            getLocationByKeys
        }
    }
});