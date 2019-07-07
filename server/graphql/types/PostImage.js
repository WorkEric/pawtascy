/* 
 * types: post_image
 */

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLString
    } = require('graphql');

const db = require('../../models/index.js');

 const PostImage = new GraphQLObjectType({
    name: 'PostImage',
    fields: () => {
        return {
            id: {
                type: GraphQLID,
                resolve (post_image) {
                    return post_image.id;
                }
            },
            post_id: {
                type: GraphQLInt,
                resolve (post_image) {
                    return post_image.post_id;
                }
            },
            image_link: {
                type: GraphQLString,
                resolve (post_image) {
                    return post_image.image_link;
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
    PostImage: PostImage
}