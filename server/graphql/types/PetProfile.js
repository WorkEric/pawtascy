'use strict';


const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLID,
    GraphQLString,
    } = require('graphql');

const DateType = require('./util.js')


module.exports = new GraphQLObjectType({
    name: 'PetProfile',
    fields: () => {
        return {
            id: {
                type: GraphQLID,
                resolve (pet_profile) {
                    return pet_profile.id;
                }
            },
            nick_name: {
                type: GraphQLString,
                resolve (pet_profile) {
                    return pet_profile.nick_name;
                }
            },
            avatar: {
                type: GraphQLString,
                resolve (pet_profile) {
                    return pet_profile.avatar;
                }
            },
            breed: {
                type: GraphQLString,
                resolve (pet_profile) {
                    return pet_profile.breed;
                }
            },
            birthday: {
                type: DateType,
                resolve (pet_profile) {
                    return pet_profile.birthday;
                }
            },
            gender: {
                type: GraphQLString,
                resolve (pet_profile) {
                    return pet_profile.gender;
                }
            },
            weight: {
                type: GraphQLString,
                resolve (pet_profile) {
                    return pet_profile.weight;
                }
            },
            character: {
                type: GraphQLString,
                resolve (pet_profile) {
                    return pet_profile.character;
                }
            },
            is_neutered: {
                type: GraphQLBoolean,
                resolve (pet_profile) {
                    return pet_profile.is_neutered;
                }
            },            
            dislike: {
                type: GraphQLString,
                resolve (pet_profile) {
                    return pet_profile.dislike;
                }
            },
            health: {
                type: GraphQLString,
                resolve (pet_profile) {
                    return pet_profile.health;
                }
            },
            description: {
                type: GraphQLString,
                resolve (pet_profile) {
                    return pet_profile.description;
                }
            },
            created_at: {
                type: DateType,
                resolve (pet_profile) {
                    return pet_profile.created_at
                }
            },
            updated_at: {
                type: DateType,
                resolve (pet_profile) {
                    return pet_profile.updated_at
                }
            }
        }
    }
})