const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean
    } = require('graphql');

const { Event } = require('../types/Event.js');

const db = require('../../models/index.js');

const createEvent = {
    type: Event,
    args: {
        title: {type: GraphQLString },
        location_id: {type: GraphQLInt },
        address: {type: GraphQLString },
        event_start_at: {type: GraphQLString },
        cover: {type: GraphQLString },
        cost: {type: GraphQLString },
        restrict_attendee_number: {type: GraphQLInt },
        restrict_pets_number: {type: GraphQLInt },
        is_neutered: {type: GraphQLBoolean },
        detail: {type: GraphQLString },
        note: {type: GraphQLString },
    },
    resolve(_, args) {
        return db.event.create(args);
    }
};

const updateEvent = {
    type: Event,
    args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        title: {type: GraphQLString },
        location_id: {type: GraphQLInt },
        address: {type: GraphQLString },
        event_start_at: {type: GraphQLString },
        cover: {type: GraphQLString },
        cost: {type: GraphQLString },
        restrict_attendee_number: {type: GraphQLInt },
        restrict_pets_number: {type: GraphQLInt },
        is_neutered: {type: GraphQLBoolean },
        detail: {type: GraphQLString },
        note: {type: GraphQLString },
    },
    resolve(_, args) {
        let id = args.id;
        delete args.id;
        return db.event.update(
            args, 
            { where: { id }}
        ).then(() => {
            return db.event.findOne({ where: {id}});
        })
    }
}

module.exports = {
    createEvent,
    updateEvent
}