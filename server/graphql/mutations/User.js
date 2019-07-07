const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLBoolean
    } = require('graphql');

const db = require('../../models/index.js');
const { User } = require('../types/User.js');

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

        pet_categories: { type: GraphQLString },
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
    resolve(_, args) {
        return db.user.create({
            username: args.username,
            email: args.email,
            first_name: args.first_name,
            last_name: args.last_name,
            password: args.password
        }).then(user => {
            let user_id = user.toJSON().id;
            let promises = []

            promises.push(db.location.findOne({
                where: {
                    city: args.city,
                    state: args.state,
                    country: args.country
                }
            }).then((location) => {
                (location) ? db.user_profile.create({
                    gender: args.gender,
                    age: args.age,
                    job: args.job,
                    avatar: args.avatar,
                    self_introduction: args.self_introduction,
                    user_id: user_id,
                    location_id: location.id
                }) : db.location.create({
                    city: args.city,
                    state: args.state,
                    country: args.country,
                    zip_code: args.zip_code,
                    time_zone: 'America/Los_Angeles',
                }).then(location => {
                    return db.user_profile.create({
                        gender: args.gender,
                        age: args.age,
                        job: args.job,
                        avatar: args.avatar,
                        self_introduction: args.self_introduction,
                        user_id: user_id,
                        location_id: location.id
                    })
                })
            }))

            promises.push(
                db.pet_profile.create({
                    nick_name: args.nick_name,
                    avatar: args.pet_avatar,
                    breed: args.breed,
                    birthday: args.birthday,
                    gender: args.pet_gender,
                    is_neutered: args.is_neutered,
                    weight: args.weight,
                    character: args.character,
                    dislike: args.dislike,
                    health: args.health,
                    description: args.description
                })
            )

            return Promise.all(promises).then(() => {
                return user;
            })            
        })
    }
}

module.exports = {
    createUser
};