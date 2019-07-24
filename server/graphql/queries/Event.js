/*
 * queries: event
 */ 
const { 
    GraphQLID,
    GraphQLString, 
    GraphQLInt,
    GraphQLList, 
} = require('graphql');

const db = require('../../models/index.js');
const { Event } = require('../types/Event.js');
const { User } = require('../types/User.js');

// location operation
const getEvents = {
    type: new GraphQLList(Event),
    args: {
    },
    resolve(_, args) {
        return db.event.findAll();
    }
}

const getEventById = {
    type: Event,
    args: {
        id : {type: GraphQLID},
    },
    resolve(_, {id}) {
        return db.event.findOne({where: {
            id: id, 
        }});
    }
}

const getEventByLocationId = {
    type:  new GraphQLList(Event),
    args: {
        location_id : {type: GraphQLInt},
    },
    resolve(_, {location_id}) {
        return db.event.findAll({where:{
            location_id: location_id
        }});
    }
}

const getEventByCity = {
    type: new GraphQLList(Event),
    args: {
        city: {type: GraphQLString},
        state: {type: GraphQLString},
        country: {type: GraphQLString}
    },
    resolve(_, {city, state, country}) { 
        return db.location.findOne({
            where: {
                city: city, 
                state: state, 
                country: country
            }
        }).then(function(location) {
            return db.event.findAll({
                where: {location_id: location.id},
            })
        })
    }
}

const getEventByUserId = {
    type: new GraphQLList(Event),
    args: {
        user_id: {type: GraphQLInt}
    },
    resolve (_, {user_id}) {
        let where = {
            '$userEventUsers.id$': {}
        };

        if (user_id) {
            where['$userEventUsers.id$'][db.Sequelize.Op.eq] = user_id;
        }

        return db.event.findAll({
            where,
            include: [{
                model: db.user,
                as: 'userEventUsers',
                through: {}
            }],
            subQuery: false
        })
    }
}

const getEventByUserEmail = {
    type: new GraphQLList(Event),
    args: {
        email: {type: GraphQLString}
    },
    resolve (_, {email}) {
        let where = {
            '$userEventUsers.id$': {}
        };
        return db.user.findOne({
            where: {
                email: email
            }
        }).then(user =>{
            if (email) {
                where['$userEventUsers.id$'][db.Sequelize.Op.eq] = user.id;
            }     
           return db.event.findAll({
                where,
                include: [{
                    model: db.user,
                    as: 'userEventUsers',
                    through: {}
                }],
            subQuery: false
            })
        })
    }
}


module.exports = {
    getEvents,
    getEventById,
    getEventByLocationId,
    getEventByCity,
    getEventByUserId,
    getEventByUserEmail,
}