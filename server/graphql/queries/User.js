const { 
    GraphQLString, 
    GraphQLList, 
} = require('graphql');

const db = require('../../models/index.js');
const { User } = require('../types/User.js');

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

module.exports = {
    getUsers,
    getUserByUsername,
    getUserByEmail,
}
