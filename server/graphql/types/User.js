/* 
 * types: user
 */

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLBoolean,
    GraphQLString
    } = require('graphql');

// const DateType = require('./util.js');
const db = require('../../models/index.js');
const { UserProfile } = require('./UserProfile.js');

 const User = new GraphQLObjectType({
    name: 'User',
    fields: () => {
        return {
            id: {
                type: GraphQLID,
                resolve (user) {
                    return user.id;
                }
            },
            username: {
                type: GraphQLString,
                resolve (user) {
                    return user.username;
                }
            },
            email: {
                type: GraphQLString,
                resolve (user) {
                    return user.email;
                }
            },
            first_name: {
                type: GraphQLString,
                resolve (user) {
                    return user.first_name;
                }
            },
            last_name: {
                type: GraphQLString,
                resolve (user) {
                    return user.last_name;
                }
            },
            password: {
                type: GraphQLString,
                resolve (user) {
                    return user.password;
                }
            },
            salt: {
                type: GraphQLString,
                resolve (user) {
                    return user.salt;
                }
            },
            is_superuser: {
                type: GraphQLBoolean,
                resolve (user) {
                    return user.is_superuser;
                }
            },
            is_staff: {
                type: GraphQLBoolean,
                resolve (user) {
                    return user.is_staff;
                }
            },
            is_active: {
                type: GraphQLBoolean,
                resolve (user) {
                    return user.is_active;
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
            user_profile: {
                type: UserProfile,
                resolve (user) {
                    return user['dataValues']['userProfile'];
                }
            }
        }
    }
})

module.exports = {
    User: User
}
