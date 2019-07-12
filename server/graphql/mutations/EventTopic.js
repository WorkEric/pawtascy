const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLBoolean
    } = require('graphql');

const db = require('../../models/index.js');
const { EventTopic } = require('../types/EventTopic.js');

const createEventTopic = {
    type: EventTopic,
    args: {
        topic: {type: GraphQLString },
        order_number: {type: GraphQLString },
    },
    resolve(_, args) {
        return db.event_topic.create(args);
    }
};

const updateEventTopic = {
    type: EventTopic,
    args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        topic: {type: GraphQLString },
        order_number: {type: GraphQLString },
    },
    resolve(_, args) {
        let id = args.id;
        delete args.id;
        return db.event_topic.update(
            args, 
            { where: { id }}
        ).then(() => {
            return db.event_topic.findOne({ where: {id}});
        })
    }
}


module.exports = {
    createEventTopic,
    updateEventTopic,
}