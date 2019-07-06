/* 
 * types: post_video
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

 const Message = new GraphQLObjectType({
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
            video_link: {
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