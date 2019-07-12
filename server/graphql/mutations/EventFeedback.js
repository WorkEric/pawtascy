const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLBoolean
    } = require('graphql');

const db = require('../../models/index.js');
const { EventFeedback } = require('../types/EventFeedback.js');

const createEventFeedback = {
    type: EventFeedback,
    args: {
        event_id: {type: GraphQLInt },
        user_id: {type: GraphQLInt },
        rating: {type: GraphQLInt },
        comment: {type: GraphQLString },
    },
    resolve(_, args) {
        return db.event_feedback.create(args);
    }
};

const updateEventFeedback = {
    type: EventFeedback,
    args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        event_id: {type: GraphQLInt },
        user_id: {type: GraphQLInt },
        rating: {type: GraphQLInt },
        comment: {type: GraphQLString },
    },
    resolve(_, args) {
        let id = args.id;
        delete args.id;
        return db.event_feedback.update(
            args, 
            { where: { id }}
        ).then(() => {
            return db.event_feedback.findOne({ where: {id}});
        })
    }
}


module.exports = {
    createEventFeedback,
    updateEventFeedback,
}