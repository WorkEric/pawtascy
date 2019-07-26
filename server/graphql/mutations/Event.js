const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLList
    } = require('graphql');

const { Event } = require('../types/Event.js');
const { user_profile_obj, pet_profile_obj, location_obj } = require('./util.js')
const db = require('../../models/index.js');

const createEvent = {
    type: Event,
    args: {
        email: { type: GraphQLString },
        
        categories: { type: new GraphQLList(GraphQLString) },

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
        return db.event.create({
            title: args.title,
            location_id: '1',
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
        }).then(event =>{
            let promises = []
            let new_location_id=[]
            let event_id = event.id
            //Update location_id
            promises.push(
                db.location.findOne({
                        where: {
                            city: args.city,
                            state: args.state,
                          country: args.country
                        }
                    }).then((location) => {
                        return (location) ? event.update(
                            { location_id: location.id },
                            { where: { _id: event.id } }
                          ) : db.location.create(location_obj(
                            args.city, args.state, args.country, args.zip_code, 'America/Los_Angeles'
                            )).then(location =>{
                           return event.update(
                                { location_id: location.id },
                                { where: { _id: event.id } }
                              )
                        })
                    })
            )

            //Add event_pet_category
            promises.push(
                args.categories.map(category => db.pet_category.findOne({where: {name:category}})
                    .then(pet_category_obj => pet_category_obj ? event.addEventPetCategoryPetCategories(pet_category_obj): db.pet_category.create({name: category})
                        .then(pet_category_obj => event.addEventPetCategoryPetCategories(pet_category_obj)))
                )
            )
            //Add user_event
            promises.push(
                db.user.findOne({
                    where: {
                        email: args.email
                    }
                }).then((user) => {
                    return  event.addUserEventUsers(user)
                })
            )

            return Promise.all(promises).then(() => {
                db.user_event.update(
                    {role :'host'},
                    {where: { event_id:event_id } }
                )
                return event;
            })     
       })
    }
};


const joinEvent = {
    type: Event,
    args: {
        email: { type: GraphQLString },

        event_id: {type: GraphQLInt },
    },resolve(_, args) {
        return db.user.findOne({
            where: {
                email: args.email
            }
        }).then((user)=>{
          return db.user_event.create({
                user_id:user.id,
                event_id: args.event_id,
                role: 'attendee',
            })
        })
    }
}


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
    updateEvent,
    joinEvent
}