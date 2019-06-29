'use strict';

const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLID,
    GraphQLString,
    } = require('graphql');

const DateType = require('./util.js')

module.exports = new GraphQLObjectType({
    name: 'PetCategory',
    fields: () => {
        return {
            id: {
                type: GraphQLID,
                resolve (pet_category) {
                    return pet_category.id;
                }
            },
            name: {
                type: GraphQLString,
                resolve (pet_category) {
                    return pet_category.name;
                }
            },
            order_number: {
                type: GraphQLInt,
                resolve (pet_category) {
                    return pet_category.order_number;
                }
            },
            created_at: {
                type: DateType,
                resolve (pet_category) {
                    return pet_category.created_at
                }
            },
            updated_at: {
                type: DateType,
                resolve (pet_category) {
                    return pet_category.updated_at
                }
            }     
        }
    }
})