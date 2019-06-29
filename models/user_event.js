'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_event = sequelize.define('user_event', {
   id: {
     type: DataTypes.INTEGER,
     autoIncrement: true,
     primaryKey: true,
     field: 'id'
   },
   user_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
     validate: {
       notEmpty: true,
     }
   },
   event_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
     validate: {
       notEmpty: true,
     }
   },
   role: {
     type: DataTypes.STRING,
     allowNull: false,
     validate: {
       notEmpty: true,
     }
   },
  }, {});
  user_event.associate = function(models) {
    user_event.belongsTo(models.event,{
        foreignKey: 'id',
        as: 'event',
    });
    user_event.belongsTo(models.user,{
        foreignKey: 'id',
        as: 'user',
    });
  };
  return user_event;
};