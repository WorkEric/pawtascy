/*
 * queries: user
 */ 
const { 
    GraphQLString, 
    GraphQLList,
    GraphQLInt
} = require('graphql');

const db = require('../../models/index.js');
const { User } = require('../types/User.js');
// const { UserProfile } = require('../types/UserProfile.js')

const getUsers = {
    type: new GraphQLList(User),
    args: {},
    resolve(_, args) {
        return db.user.findAll({
            subQuery: false
        });
    }
}

const getUserByUsername = {
    type: User,
    args: {
        username: {type: GraphQLString}
    },
    resolve(_, {username}) {
        return db.user.findOne({
            where: {
                username: username
            }
        });
    }
}

const getUserByEmail = {
    type: User,
    args: {
        email: {type: GraphQLString}
    },
    resolve(_, {email}) {
        return db.user.findOne({
            where: {
                email: email
            }
        })
    }
}

const getUserWithProfile = {
    type: new GraphQLList(User),
    args: {},
    resolve(_, args) {
        return db.user.findAll({
            include: [{
                model: db.user_profile,
                as: 'userProfile',
                require: true
            }],
            subQuery: false
        })
    }
}

const getUserWithProfileById = {
    type: User,
    args: {
        id: {type: GraphQLInt}
    },
    resolve(_, {id}) {
        return db.user.findOne({
            where: {id:id},
            include: {
                model: db.user_profile,
                as: 'userProfile',
                require: true
            },
            subQuery: false
        })
    }
}

const getUserWithProfileByUsername = {
    type: User,
    args: {
        username: {type: GraphQLString}
    },
    resolve(_, {username}) {
        return db.user.findOne({
            where: {username:username},
            include: {
                model: db.user_profile,
                as: 'userProfile',
                require: true
            },
            subQuery: false
        })
    }
}

const getUsersByPetProfileId = {
    type: new GraphQLList(User),
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

        return db.user.findAll({
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
    getUsers,
    getUserByUsername,
    getUserByEmail,
    getUserWithProfile,
    getUserWithProfileById,
    getUserWithProfileByUsername,
    getUsersByPetProfileId
}
