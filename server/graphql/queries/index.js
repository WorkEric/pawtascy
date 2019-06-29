'use strict';

const { 
    GraphQLObjectType, 
    GraphQLInt, 
    GraphQLString, 
    GraphQLList, 
    GraphQLFloat, 
    GraphQLBoolean 
} = require('graphql');

const User = require('../types/User.js');

module.exports = new GraphQLObjectType({
    name: 'Query',
    fields: () => {
        return {
            users: {
                type: new GraphQLList(User),
                args: {
                    username: {type: GraphQLString},
                    email: {type: GraphQLString}
                },
                resolve(_, { username, email}) {
                    return IDBCursor.file.findAll()
                }
            }
        }
    }
});