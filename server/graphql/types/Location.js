// types: Location
const {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLID,
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLList
    } = require('graphql');

const InputLocation = new GraphQLInputObjectType({
    name: 'InputLocation',
    fields: {
        city: {type: new GraphQLNonNull(GraphQLString)},
        state: {type: new GraphQLNonNull(GraphQLString)},
        country: {type: new GraphQLNonNull(GraphQLString)}
    }
});

const Location = new GraphQLObjectType({
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
                type: GraphQLString,
                resolve (location) {
                    return location.created_at
                }
            },
            updated_at: {
                type: GraphQLString,
                resolve (location) {
                    return location.updated_at
                }
            },
            // user_profiles: {
            //     type: new GraphQLList(GraphQLString),
            //     resolve (location) {
            //         return location.getUserProfiles();
            //     }
            // }
        }
    }
});

module.exports = { 
    Location: Location, InputLocation: InputLocation
};