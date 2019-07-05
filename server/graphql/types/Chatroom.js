/* 
 * types: chatroom
 */

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLString
    } = require('graphql');

// const DateType = require('./util.js');
const db = require('../../models/index.js');

 const Chatroom = new GraphQLObjectType({
    name: 'Chatroom',
    fields: () => {
        return {
            id: {
                type: GraphQLID,
                resolve (chatroom) {
                    return chatroom.id;
                }
            },
            event_id: {
                type: GraphQLInt,
                resolve (chatroom) {
                    return chatroom.event_id;
                }
            },
            title: {
                type: GraphQLString,
                resolve (chatroom) {
                    return chatroom.title;
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
    Chatroom: Chatroom
}