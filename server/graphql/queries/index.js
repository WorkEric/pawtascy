'use strict';

const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLList, 
} = require('graphql');

const db = require('../../models/index.js');
const { Location, InputLocation} = require('../types/Location.js');

module.exports = new GraphQLObjectType({
    name: 'Query',
    fields: () => {
        return {
            locations: {
                type: new GraphQLList(Location),
                args: {
                    city: {type: GraphQLString},
                    state: {type: GraphQLString},
                    country: {type: GraphQLString}
                },
                resolve(_, { city, state}) {
                    return db.location.findAll();
                }
            }
        }
    }
});