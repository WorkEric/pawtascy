/* 
 * types: post_bark
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

 const PostBark = new GraphQLObjectType({
    name: 'PostBark',
    fields: () => {
        return {
            id: {
                type: GraphQLID,
                resolve (post_bark) {
                    return post_bark.id;
                }
            },
            post_id: {
                type: GraphQLInt,
                resolve (post_bark) {
                    return post_bark.post_id;
                }
            },
            user_id: {
                type: GraphQLInt,
                resolve (post_bark) {
                    return post_bark.user_id;
                }
            },
            reply_id: {
                type: GraphQLInt,
                resolve (post_bark) {
                    return post_bark.reply_id;
                }
            },
            content: {
                type: GraphQLString,
                resolve (post_bark) {
                    return post_bark.content;
                }
            },
            soft_delete: {
                type: GraphQLBoolean,
                resolve (post_bark) {
                    return post_bark.soft_delete;
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
    PostBark: PostBark
}