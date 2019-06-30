const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean
    } = require('graphql');

const { Location } = require('../types/Location.js');

const db = require('../../models/index.js');

const createLocation = {
    type: Location,
    args: {
        city: {type: GraphQLString },
        state: {type: GraphQLString },
        country: {type: GraphQLString },
    },
    resolve(_, args) {
        return db.location.create(args);
    }
};

const updateLocation = {
    type: Location,
    args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        city: { type: GraphQLString },
        state: { type: GraphQLString },
        country: { type: GraphQLString }
    },
    resolve(_, args) {
        let id = args.id;
        delete args.id;
        return db.location.update(
            args, 
            { where: { id }}
        ).then(() => {
            return db.location.findOne({ where: {id}});
        })
    }
}

module.exports = {
    createLocation,
    updateLocation
}