'use strict';

const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLID,
    GraphQLString,
    GraphQLInt
    } = require('graphql');


const PetCategory = new GraphQLObjectType({
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
                type: GraphQLString,
                resolve (pet_category) {
                    return pet_category.created_at
                }
            },
            updated_at: {
                type: GraphQLString,
                resolve (pet_category) {
                    return pet_category.updated_at
                }
            }     
        }
    }
})

module.exports = {
    PetCategory: PetCategory
}
