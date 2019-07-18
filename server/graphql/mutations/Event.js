const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean
    } = require('graphql');

const { Event } = require('../types/Event.js');
const { user_profile_obj, pet_profile_obj, location_obj } = require('./util.js')
const db = require('../../models/index.js');

const createEvent = {
    type: Event,
    args: {
        email: { type: GraphQLString },
        
        pet_category_name: { type: GraphQLString },

        city: { type: GraphQLString },
        state: { type: GraphQLString },
        country: { type: GraphQLString },
        zip_code: { type: GraphQLInt },

        address: {type: GraphQLString },
        title: {type: GraphQLString },
        event_start_at: {type: GraphQLString },
        event_end_at: {type: GraphQLString },
        cover: {type: GraphQLString },
        cost: {type: GraphQLString },
        restrict_attendee_number: {type: GraphQLInt },
        restrict_pets_number: {type: GraphQLInt },
        is_neutered: {type: GraphQLBoolean },
        detail: {type: GraphQLString },
        note: {type: GraphQLString },
    },
    async resolve(_, args) {
        let promises = []
        let location_id = []
        let event = []
        // location 
        promises.push(db.location.findOne({
            where: {
                city: args.city,
                state: args.state,
              country: args.country
            }
        }).then((location) => {
            (location) ? location_id = location.id: db.location.create(location_obj(
                args.city, args.state, args.country, args.zip_code, 'America/Los_Angeles'
                ))
            }).then(() => {
                return db.event.create({
                    title: args.title,
                    location_id: location_id,
                    address: args.address,
                    event_start_at: args.event_start_at,
                    event_end_at: args.event_end_at,
                    cover: args.cover,
                    cost: args.cost,
                    restrict_attendee_number: args.restrict_attendee_number,
                    restrict_pets_number: args.restrict_pets_number,
                    is_neutered: args.is_neutered,
                    detail: args.detail,
                    note: args.note,
                    })
                })         
        )
            // promises.push(
            //     db.pet_profile.create(pet_profile_obj(
            //         args.nick_name, args.pet_avatar, args.breed, args.birthday, args.pet_gender,
            //         args.is_neutered, args.weight, args.character, args.dislike, args.health, args.description
            //     )).then(pet_profile => {
            //         let inner_promises = []
            //         // add user and pet_profile relation in user_pet_profile
            //         inner_promises.push(user.addPetProfiles(pet_profile))
            //         // pet_profile, pet_category and pet_profile_category
            //         inner_promises.push(args.categories.map(category => db.pet_category.findOne({where: {name:category}})
            //             .then(pet_category_obj => pet_category_obj ? pet_profile.addPetCategories(pet_category_obj) : db.pet_category.create({name: category})
            //                 .then(pet_category_obj => pet_profile.addPetCategories(pet_category_obj)))))
            //         return inner_promises
            //     })
            // )       
    }
};

const updateEvent = {
    type: Event,
    args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        title: {type: GraphQLString },
        location_id: {type: GraphQLInt },
        address: {type: GraphQLString },
        event_start_at: {type: GraphQLString },
        cover: {type: GraphQLString },
        cost: {type: GraphQLString },
        restrict_attendee_number: {type: GraphQLInt },
        restrict_pets_number: {type: GraphQLInt },
        is_neutered: {type: GraphQLBoolean },
        detail: {type: GraphQLString },
        note: {type: GraphQLString },
    },
    resolve(_, args) {
        let id = args.id;
        delete args.id;
        return db.event.update(
            args, 
            { where: { id }}
        ).then(() => {
            return db.event.findOne({ where: {id}});
        })
    }
}

module.exports = {
    createEvent,
    updateEvent
}