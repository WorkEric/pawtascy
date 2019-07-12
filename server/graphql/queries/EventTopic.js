/*
 * queries: event_topic
 */ 
const { 
    GraphQLString, 
    GraphQLInt,
    GraphQLList, 
    GraphQLID,
} = require('graphql');

const db = require('../../models/index.js');
const { EventTopic } = require('../types/EventTopic.js');

// location operation
const getEventTopics = {
    type: new GraphQLList(EventTopic),
    args: {
    },
    resolve(_, args) {
        return db.event_topic.findAll();
    }
}

const getEventTopicById = {
    type: EventTopic,
    args: {
        id: {type: GraphQLID},
    },
    resolve(_, {id}) {
        return db.event_topic.findOne({where: {
            id: id, 
        }});
    }
}

const getEventTopicByOrderNumber = {
    type: EventTopic,
    args: {
        order_number: {type: GraphQLString},
    },
    resolve(_, {order_number}) {
        return db.event_topic.findOne({where: {
            order_number: order_number, 
        }});
    }
}
module.exports = {
    getEventTopics,
    getEventTopicById,
    getEventTopicByOrderNumber,
}