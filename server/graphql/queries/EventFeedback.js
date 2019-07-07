/*
 * queries: event_feedback
 */ 
const { 
    GraphQLID,
    GraphQLString, 
    GraphQLInt,
    GraphQLList, 
} = require('graphql');

const db = require('../../models/index.js');
const { EventFeedback } = require('../types/EventFeedback.js');

// location operation
const getEventFeedbacks = {
    type: new GraphQLList(EventFeedback),
    args: {
    },
    resolve(_, args) {
        return db.event_feedback.findAll();
    }
}

const getEventFeedbackById = {
    type: EventFeedback,
    args: {
        id : {type: GraphQLID},
    },
    resolve(_, {id}) {
        return db.event_feedback.findOne({where: {
            id: id, 
        }});
    }
}

const getEventFeedbackByUserId = {
    type: EventFeedback,
    args: {
        user_id : {type: GraphQLInt},
    },
    resolve(_, {user_id}) {
        return db.event_feedback.findOne({where: {
            user_id: user_id, 
        }});
    }
}

const getEventFeedbackByEventId = {
    type: EventFeedback,
    args: {
        event_id : {type: GraphQLInt},
    },
    resolve(_, {event_id}) {
        return db.event_feedback.findOne({where: {
            event_id: event_id, 
        }});
    }
}

module.exports = {
    getEventFeedbacks,
    getEventFeedbackById,
    getEventFeedbackByUserId,
    getEventFeedbackByEventId,
}