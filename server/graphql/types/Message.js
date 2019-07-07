/* 
 * types: message
 */

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLString
    } = require('graphql');

const db = require('../../models/index.js');

 const Message = new GraphQLObjectType({
    name: 'Message',
    fields: () => {
        return {
            id: {
                type: GraphQLID,
                resolve (message) {
                    return message.id;
                }
            },
            chatroom_id: {
                type: GraphQLInt,
                resolve (message) {
                    return message.chatroom_id;
                }
            },
            user_id: {
                type: GraphQLInt,
                resolve (message) {
                    return message.user_id;
                }
            },
            content: {
                type: GraphQLString,
                resolve (message) {
                    return message.content;
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
    Message: Message
}