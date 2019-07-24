const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLBoolean
    } = require('graphql');

const db = require('../../models/index.js');
const { PetProfile } = require('../types/PetProfile.js');
const { pet_profile_obj } = require('./util.js')

const createPetProfile = {
    type: PetProfile,
    args: {
        user_id: { type: new GraphQLNonNull(GraphQLInt) },
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
    resolve (_, args) {
        return db.pet_profile.create(pet_profile_obj(
            args.nick_name, args.pet_avatar, args.breed, args.birthday, args.pet_gender,
            args.is_neutered, args.weight, args.character, args.dislike, args.health, args.description
        )).then(pet_profile => {
            db.user.findOne({
                where: { id : args.user_id}
            }).then(user => {
                let promises = [];
                promises.push(user.addPetProfiles(pet_profile));
                promises.push(args.categories.map(category => db.pet_category.findOne({where:{name:category}})
                    .then(pet_category_obj => pet_category_obj ? pet_profile.addPetCategories(pet_category_obj) : db.pet_category.create({name:category})
                        .then(pet_category_obj => pet_profile.addPetCategories(pet_category_obj)))))
                return Promise.all(promises).then(() => {
                    return user
                })
            })
            return pet_profile;
        })
    }
}

const updatePetProfile = {
    type: PetProfile,
    args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        categories: { type: new GraphQLList(GraphQLString) },
        nick_name: { type: GraphQLString },
        pet_avatar: { type: GraphQLString },
        breed: { type: GraphQLString },
        birthday: { type: GraphQLString },
        gender: { type: GraphQLString },
        is_neutered: { type: GraphQLBoolean },
        weight: {type: GraphQLString },
        character: { type: GraphQLString },
        dislike: { type: GraphQLString },
        health: { type: GraphQLString },
        description: { type: GraphQLString }
    },
    resolve (_, args) {
        let id = args.id;
        delete args.id;
        return db.pet_profile.update(
            args,
            { where: {id }}
        ).then(() => {
            return db.pet_profile.findOne({ where: { id }})
        }).then( pet_profile => {
            if (args.categories) {
                let categories = args.categories;
                return pet_profile.setPetCategories([]).then(() => {
                    let promises = categories.map(category => {
                        return db.pet_category.findOne({where:{name:category}}).then(pet_category => {
                            if (pet_category) {
                                return pet_profile.addPetCategories(pet_category)
                            } else {
                                return db.pet_category.create({name:category}).then(pet_category_obj => {
                                    return pet_profile.addPetCategories(pet_category_obj)
                                })
                            }
                        }).catch(() => {
                            throw new Error();
                        });
                    });
                    return Promise.all(promises).then(() => {
                        return pet_profile;
                    })
                })
            }
            return pet_profile
        }).catch('Can not update pet_category');
    }
}

module.exports = {
    createPetProfile,
    updatePetProfile,
}