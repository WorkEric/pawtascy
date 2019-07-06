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

 const PostVideo = new GraphQLObjectType({
    name: 'PostVideo',
    fields: () => {
        return {
            id: {
                type: GraphQLID,
                resolve (post_video) {
                    return post_video.id;
                }
            },
            post_id: {
                type: GraphQLInt,
                resolve (post_video) {
                    return post_video.post_id;
                }
            },
            video_link: {
                type: GraphQLString,
                resolve (post_video) {
                    return post_video.image_link;
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
    PostVideo: PostVideo
}