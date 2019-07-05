/* 
 * types: post
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

 const Post = new GraphQLObjectType({
    name: 'Post',
    fields: () => {
        return {
            id: {
                type: GraphQLID,
                resolve (post) {
                    return post.id;
                }
            },
            user_id: {
                type: GraphQLInt,
                resolve (post) {
                    return post.user_id;
                }
            },
            title: {
                type: GraphQLString,
                resolve (post) {
                    return post.title;
                }
            },
            is_private: {
                type: GraphQLBoolean,
                resolve (post) {
                    return post.is_private;
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
    Post: Post
}
