/* 
 * types: event_topic
 */

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLString
    } = require('graphql');

const db = require('../../models/index.js');

 const EventTopic = new GraphQLObjectType({
    name: 'EventTopic',
    fields: () => {
        return {
            id: {
                type: GraphQLID,
                resolve (event_topic) {
                    return event_topic.id;
                }
            },
            topic: {
                type: GraphQLString,
                resolve (event_topic) {
                    return event_topic.topic;
                }
            },
            order_number: {
                type: GraphQLString,
                resolve (event_topic) {
                    return event_topic.order_number;
                }
            },
            // created_at: {
            //     type: DateType,
            //     resolve (user) {
            //         return user.created_at
            //     }
            // },
            // updated_at: {
            //     type: DateType,
            //     resolve (user) {
            //         return user.updated_at
            //     }
            // },
        }
    }
})

module.exports = {
    EventTopic: EventTopic
}