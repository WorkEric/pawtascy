const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList
    } = require('graphql');

const DateType = require('./util.js');

module.exports = new GraphQLObjectType({
    name: 'Location',
    fields: () => {
        return {
            id: {
                type: GraphQLID,
                resolve (location) {
                    return location.id;
                }
            },
            city: {
                type: GraphQLString,
                resolve (location) {
                    return location.city;
                }
            },
            state: {
                type: GraphQLString,
                resolve (location) {
                    return location.state;
                }
            },
            country: {
                type: GraphQLString,
                resolve (location) {
                    return location.country;
                }
            },     
            zip_code: {
                type: GraphQLInt,
                resolve (location) {
                    return location.zip_code;
                }
            },
            time_zone: {
                type: GraphQLString,
                resolve (location) {
                    return location.time_zone;
                }
            },
            created_at: {
                type: DateType,
                resolve (location) {
                    return location.created_at
                }
            },
            updated_at: {
                type: DateType,
                resolve (location) {
                    return location.updated_at
                }
            }                  
        }
    }
})