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

const getUserWithProfileByEmail = {
    type: User,
    args: {
        email: {type: GraphQLString}
    },
    resolve(_, {email}) {
        return db.user.findOne({
            where: {email:email},
            include: {
                model: db.user_profile,
                as: 'userProfile',
                require: true
            },
            subQuery: false
        })
    }
}

const getUserPetByUsername = {
    type: User,
    args: {
        username: {type: GraphQLString}
    },
    resolve (_, {username}) {
        return db.user.findAll({
            where: {username: username},
            include: [{
                model: db.pet_profile,
                as: 'petProfiles',
                require: true,
                through: {}
            }],
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

const getHostUserbyEventId = {
    type: User,
    args:{
        id: {type: GraphQLInt}
    },
    resolve (_, {id}) {
        return db.user_event.findOne({
            where:{event_id: id,
                   role:'host'
            }
        }).then((user_event_record) =>{
            return db.user.findOne({
                where:{id: user_event_record.user_id,
                }              
            })
        })
    }
}

const getAttendeeUsersbyEventId = {
    type: new GraphQLList(User),
    args:{
        id: {type: GraphQLInt}
    },
    resolve (_, {id}) {
        return db.user_event.findAll({
            where:{event_id: id,
                   role:'attendee'
            }
        }).then((user_event_records) =>{
            var result =[]
            user_event_records.forEach(function(record){
                var user = db.user.findOne({
                    where:{id: record.user_id,
                    }              
                })
                result.push(user)
            })
            return result
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
    getUserWithProfileByEmail,
    getUsersByPetProfileId,
    getUserPetByUsername,
    getHostUserbyEventId,
    getAttendeeUsersbyEventId
}
