const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')

const {
    GraphQLNonNull,
    GraphQLString,
    } = require('graphql');

const db = require('../../models/index.js');
const { User } = require('../types/User.js');

const login = {
    type: GraphQLString,
    args: {
        email: { type: new GraphQLNonNull(GraphQLString)},
        password: { type: new GraphQLNonNull(GraphQLString)}
    },
    async resolve (_, args) {
        const user = await db.user.findOne({where:{email:args.email}})
        if (!user) {
            throw new Error('No user with that email')
        }
        const valid = await bcrypt.compare(args.password, user.password)

        if (!valid) {
            throw new Error('Incorrect password')
        }
        const result = {}
        result.token = jsonwebtoken.sign({
            id: user.id,
            email: user.email
        }, 'test', {expiresIn: '1d'})
        result.user_id = user.id
        return JSON.stringify(result)
    }
}

module.exports = {
    login
}