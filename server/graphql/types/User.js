/* 
 * types: user
 */
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLBoolean,
    GraphQLString,
    GraphQLList
    } = require('graphql');

const { UserProfile } = require('./UserProfile.js');
const { PetProfile } = require('./PetProfile.js');

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
            created_at: {
                type: GraphQLString,
                resolve (user) {
                    return user.created_at
                }
            },
            updated_at: {
                type: GraphQLString,
                resolve (user) {
                    return user.updated_at
                }
            },
            user_profile: {
                type: UserProfile,
                resolve (user) {
                    return user['dataValues']['userProfile'];
                }
            },
            pet_profiles: {
                type: new GraphQLList(PetProfile),
                resolve (user) {
                    // console.log('user: ', user[0]['petProfiles'])
                    if (!user[0]) {
                        return []
                    }
                    return user[0]['petProfiles']
                    // return user
                    // return user.getPetProfiles().then((pet_profile_list) => {
                    //     pet_profile_list.map((pet_profile) => (pet_profile.toJSON().pet_profile))
                    // })
                }
            }
        }
    }
})

module.exports = {
    User: User
}
