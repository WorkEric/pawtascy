const { 
    GraphQLString, 
    GraphQLList, 
} = require('graphql');

const db = require('../../models/index.js');
const { Location, InputLocation } = require('../types/Location.js');

const getLocations = {
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

module.exports = {
    getLocations
}