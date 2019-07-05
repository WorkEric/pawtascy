/* 
 * types: event
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

 const Event = new GraphQLObjectType({
    name: 'Event',
    fields: () => {
        return {
            id: {
                type: GraphQLID,
                resolve (event) {
                    return event.id;
                }
            },
            title: {
                type: GraphQLString,
                resolve (event) {
                    return event.title;
                }
            },
            location_id: {
                type: GraphQLInt,
                resolve (event) {
                    return event.location_id;
                }
            },
            address: {
                type: GraphQLString,
                resolve (event) {
                    return event.address;
                }
            },
            event_start_at: {
                type: DateType,
                resolve (event) {
                    return event.event_start_at;
                }
            },
            cover: {
                type: GraphQLString,
                resolve (event) {
                    return event.cover;
                }
            },
            cost: {
                type: GraphQLString,
                resolve (event) {
                    return event.cost;
                }
            },
            restrict_attendee_number: {
                type: GraphQLInt,
                resolve (event) {
                    return event.restrict_attendee_number;
                }
            },
            restrict_pets_number: {
                type: GraphQLInt,
                resolve (event) {
                    return event.restrict_pets_number;
                }
            },
            is_neutered: {
                type: GraphQLBoolean,
                resolve (event) {
                    return event.is_neutered;
                }
            },
            detail: {
                type: GraphQLString,
                resolve (event) {
                    return event.detail;
                }
            },
            note: {
                type: GraphQLString,
                resolve (event) {
                    return event.note;
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
    Event: Event
}
