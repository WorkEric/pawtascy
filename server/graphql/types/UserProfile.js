// types: UserProfile
const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLID,
    GraphQLString,
    GraphQLInt
    } = require('graphql');

const Location = require('./Location.js');
const DateType = require('./util.js');

const UserProfile = new GraphQLObjectType({
    name: 'UserProfile',
    fields: () => {
        return {
            id: {
                type: GraphQLID,
                resolve (user_profile) {
                    return user_profile.id;
                }
            },            
            gender: {
                type: GraphQLString,
                resolve (user_profile) {
                    return user_profile.gender;
                }
            },
            age: {
                type: GraphQLString,
                resolve (user_profile) {
                    return user_profile.age;
                }
            },
            job: {
                type: GraphQLString,
                resolve (user_profile) {
                    return user_profile.job;
                }
            },
            phone: {
                type: GraphQLString,
                resolve (user_profile) {
                    return user_profile.phone;
                }
            },
            address: {
                type: GraphQLString,
                resolve (user_profile) {
                    return user_profile.address;
                }
            },
            avatar: {
                type: GraphQLString,
                resolve (user_profile) {
                    return user_profile.avatar;
                }
            },
            self_introduction: {
                type: GraphQLString,
                resolve (user_profile) {
                    return user_profile.self_introduction;
                }
            },    
            // created_at: {
            //     type: DateType,
            //     resolve (user_profile) {
            //         return user_profile.created_at
            //     }
            // },
            // updated_at: {
            //     type: DateType,
            //     resolve (user_profile) {
            //         return user_profile.updated_at
            //     }
            // },
            user_id: {
                type: GraphQLInt,
                resolve (user_profile) {
                    return user_profile.user_id;
                }
            },
            location_id: {
                type: GraphQLInt,
                resolve (user_profile) {
                    return user_profile.location_id;
                }
            }
        }
    }
})

module.exports = {
    UserProfile: UserProfile
}