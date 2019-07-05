/*
 * queries: PetProfile
 */ 
const { 
    GraphQLString, 
    GraphQLList,
    GraphQLInt
} = require('graphql');

const db = require('../../models/index.js');
const { PetProfile } = require('../types/PetProfile.js');

const getPetProfiles = {
    type: new GraphQLList(PetProfile),
    args: {},
    resolve (_, args) {
        return db.pet_profile.findAll()
    }
}

const getPetProfileById = {
    type: PetProfile,
    args: {
        id: {type: GraphQLInt}
    },
    resolve (_, {id}) {
        return db.pet_profile.findOne({
            where: {id:id}
        })
    }
}

const getPetProfilesByCategory = {
    type: new GraphQLList(PetProfile),
    args: {
        name: {type: GraphQLString},
    },
    resolve (_, {name}) {
        let where = {
            '$petCategories.name$': {}
        };

        if (name) {
            where['$petCategories.name$'][db.Sequelize.Op.eq] = name;
        }

        return db.pet_profile.findAll({
            where,
            include: [{
                model: db.pet_category,
                as: 'petCategories',
                through: {}
            }],
            subQuery: false
        })
    }
}

const getPetProfilesByUsername = {
    type: new GraphQLList(PetProfile),
    args: {
        username: {type: GraphQLString}
    },
    resolve (_, {username}) {
        let where = {
            '$users.username$': {}
        };

        if (username) {
            where['$users.username$'][db.Sequelize.Op.eq] = username;
        }

        return db.pet_profile.findAll({
            where,
            include: [{
                model: db.user,
                as: 'users',
                through: {}
            }],
            subQuery: false
        })
    }
}

module.exports = {
    getPetProfiles,
    getPetProfileById,
    getPetProfilesByCategory,
    getPetProfilesByUsername,
}