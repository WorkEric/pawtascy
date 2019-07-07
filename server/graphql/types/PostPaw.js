/* 
 * types: post_paw
 */

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLString
    } = require('graphql');

const db = require('../../models/index.js');

 const PostPaw = new GraphQLObjectType({
    name: 'PostPaw',
    fields: () => {
        return {
            id: {
                type: GraphQLID,
                resolve (post_paw) {
                    return post_paw.id;
                }
            },
            user_id: {
                type: GraphQLInt,
                resolve (post_paw) {
                    return post_paw.user_id;
                }
            },
            post_id: {
                type: GraphQLInt,
                resolve (post_paw) {
                    return post_paw.post_id;
                }
            },
            is_paws: {
                type: GraphQLBoolean,
                resolve (post_paw) {
                    return post_paw.is_paws;
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
    PostPaw: PostPaw
}