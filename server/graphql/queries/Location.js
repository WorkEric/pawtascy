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
    resolve(_, args) {
        return db.location.findAll();
    }
}

const getLocationByKeys = {
    type: Location,
    args: {
        city: {type: GraphQLString},
        state: {type: GraphQLString},
        country: {type: GraphQLString}
    },
    resolve(_, {city, state, country}) {
        return db.location.findOne({where: {
            city: city, 
            state: state, 
            country: country
        }});
    }
}

module.exports = {
    getLocations,
    getLocationByKeys
}