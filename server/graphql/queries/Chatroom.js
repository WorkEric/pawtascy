/*
 * queries: chatroom
 */ 
const { 
    GraphQLString, 
    GraphQLInt,
    GraphQLList, 
} = require('graphql');

const db = require('../../models/index.js');
const { Chatroom } = require('../types/Chatroom.js');

// location operation
const getChatrooms = {
    type: new GraphQLList(Chatroom),
    args: {
        // city: {type: GraphQLString},
        // state: {type: GraphQLString},
        // country: {type: GraphQLString}
    },
    resolve(_, args) {
        return db.chatroom.findAll();
    }
}

const getChatroomByEventId = {
    type: Chatroom,
    args: {
        event_id: {type: GraphQLInt},
    },
    resolve(_, {event_id}) {
        return db.chatroom.findOne({where: {
            event_id: event_id, 
        }});
    }
}

module.exports = {
    getChatrooms,
    getChatroomByEventId,
}