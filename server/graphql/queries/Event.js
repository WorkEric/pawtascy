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

const getEventByLocationId = {
    type: Event,
    args: {
        location_id : {type: GraphQLInt},
    },
    resolve(_, {location_id}) {
        return db.event.findOne({where:{
            location_id: location_id
        }});
    }
}

module.exports = {
    getEvents,
    getEventById,
    getEventByLocationId,
}