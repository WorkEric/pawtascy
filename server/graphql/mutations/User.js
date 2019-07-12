// const passport = require('passport');
const bcrypt = require('bcrypt');
const validator = require('validator');
const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLBoolean
    } = require('graphql');

const db = require('../../models/index.js');
const { User } = require('../types/User.js');
const { user_profile_obj, pet_profile_obj, location_obj } = require('./util.js')

const createUser = {
    type: User,
    args: {
        username: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        password: { type: new GraphQLNonNull(GraphQLString) },
        
        gender: { type: GraphQLString },
        age: { type: GraphQLString },
        job: { type: GraphQLString },
        avatar: { type: GraphQLString },
        self_introduction: { type: GraphQLString },
        
        city: { type: GraphQLString },
        state: { type: GraphQLString },
        country: { type: GraphQLString },
        zip_code: { type: GraphQLInt },

        categories: { type: new GraphQLList(GraphQLString) },
        nick_name: { type: GraphQLString },
        pet_avatar: { type: GraphQLString },
        breed: { type: GraphQLString },
        birthday: { type: GraphQLString },
        pet_gender: { type: GraphQLString },
        is_neutered: { type: GraphQLBoolean },
        weight: {type: GraphQLString },
        character: { type: GraphQLString },
        dislike: { type: GraphQLString },
        health: { type: GraphQLString },
        description: { type: GraphQLString }
    },
    async resolve(_, args) {
        const salt = await  bcrypt.genSalt()
        args.password = await bcrypt.hash(args.password, salt)
        return db.user.create({
            username: args.username,
            email: args.email,
            first_name: args.first_name,
            last_name: args.last_name,
            password: args.password
        }).then(user => {
            let user_id = user.toJSON().id;
            let promises = []

            // location and user_profile
            promises.push(db.location.findOne({
                where: {
                    city: args.city,
                    state: args.state,
                    country: args.country
                }
            }).then((location) => {
                (location) ? db.user_profile.create(user_profile_obj(
                    args.gender, args.age, args.job, args.avatar, 
                    args.self_introduction,user_id, location.id
                )) : db.location.create(location_obj(
                    args.city, args.state, args.country, args.zip_code, 'America/Los_Angeles'
                )).then(location => {
                    return db.user_profile.create(user_profile_obj(
                        args.gender, args.age, args.job, args.avatar, 
                        args.self_introduction,user_id, location.id
                    ))
                })
            }))

            promises.push(
                db.pet_profile.create(pet_profile_obj(
                    args.nick_name, args.pet_avatar, args.breed, args.birthday, args.pet_gender,
                    args.is_neutered, args.weight, args.character, args.dislike, args.health, args.description
                )).then(pet_profile => {
                    let inner_promises = []
                    // add user and pet_profile relation in user_pet_profile
                    inner_promises.push(user.addPetProfiles(pet_profile))
                    // pet_profile, pet_category and pet_profile_category
                    inner_promises.push(args.categories.map(category => db.pet_category.findOne({where: {name:category}})
                        .then(pet_category_obj => pet_category_obj ? pet_profile.addPetCategories(pet_category_obj) : db.pet_category.create({name: category})
                            .then(pet_category_obj => pet_profile.addPetCategories(pet_category_obj)))))
                    return inner_promises
                })
            )

            return Promise.all(promises).then(() => {
                return user;
            })            
        })
    }
}

const updateUser = {
    type: User,
    args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        email: { type: GraphQLString },
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    resolve (_, args) {
        let id = args.id;
        delete args.id;
        return db.user.update(
            args,
            { where: { id } }
        ).then(() => {
            return db.user.findOne({ where: { id } })
        });
    }
};

module.exports = {
    createUser,
    updateUser
};