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
        return db.user.findAll();
    }
}

module.exports = {
    getUsers
}
