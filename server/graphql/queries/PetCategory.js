/*
 * queries: PetCategory
 */ 
const { 
    GraphQLString, 
    GraphQLList,
    GraphQLInt
} = require('graphql');

const db = require('../../models/index.js');
const { PetCategory } = require('../types/PetCategory.js');

const getPetCategories = {
    type: new GraphQLList(PetCategory),
    args: {},
    resolve (_, args) {
        return db.pet_category.findAll()
    }
}

const getPetCategoryById = {
    type: PetCategory,
    args: {
        id: {type: GraphQLInt}
    },
    resolve (_, {id}) {
        return db.pet_category.findOne({
            where: {id: id}
        })
    }
}

const getPetCategoriesByPetProfileId = {
    type: new GraphQLList(PetCategory),
    args: {
        id: {type: GraphQLInt}
    },
    resolve (_, {id}) {
        let where = {
            '$petProfiles.id$': {}
        };

        if (id) {
            where['$petProfiles.id$'][db.Sequelize.Op.eq] = id;
        }

        return db.pet_category.findAll({
            where,
            include: [{
                model: db.pet_profile,
                as: 'petProfiles',
                through: {}
            }],
            subQuery: false
        })
    }
}

module.exports = {
    getPetCategories,
    getPetCategoryById,
    getPetCategoriesByPetProfileId,
}