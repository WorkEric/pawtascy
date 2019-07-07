/*
 * queries: event
 */ 
const { 
    GraphQLID,
    GraphQLString, 
    GraphQLInt,
    GraphQLList, 
} = require('graphql');

const db = require('../../models/index.js');
const { Event } = require('../types/Event.js');

// location operation
const getEvents = {
    type: new GraphQLList(Event),
    args: {
        // city: {type: GraphQLString},
        // state: {type: GraphQLString},
        // country: {type: GraphQLString}
    },
    resolve(_, args) {
        return db.event.findAll();
    }
}

const getEventById = {
    type: Event,
    args: {
        id : {type: GraphQLID},
    },
    resolve(_, {id}) {
        return db.event.findOne({where: {
            id: id, 
        }});
    }
}

module.exports = {
    getEvents,
    getEventById,
}