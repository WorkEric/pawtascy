/* 
 * types: event_feedback
 */

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLString
    } = require('graphql');

const db = require('../../models/index.js');

 const EventFeedback = new GraphQLObjectType({
    name: 'EventFeedback',
    fields: () => {
        return {
            id: {
                type: GraphQLID,
                resolve (event_feedback) {
                    return event_feedback.id;
                }
            },
            event_id: {
                type: GraphQLInt,
                resolve (event_feedback) {
                    return event_feedback.event_id;
                }
            },
            user_id: {
                type: GraphQLInt,
                resolve (event_feedback) {
                    return event_feedback.user_id;
                }
            },
            rating: {
                type: GraphQLInt,
                resolve (event_feedback) {
                    return event_feedback.rating;
                }
            },
            comment: {
                type: GraphQLString,
                resolve (event_feedback) {
                    return event_feedback.comment;
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
    EventFeedback: EventFeedback
}