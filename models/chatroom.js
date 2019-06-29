'use strict';
module.exports = (sequelize, DataTypes) => {
  const Chatroom = sequelize.define('chatroom', {
   id: {
     type: DataTypes.INTEGER,
     autoIncrement: true,
     primaryKey: true,
     field: 'id'
   },
   event_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
     validate: {
       notEmpty: true,
     }
   },
   title: {
     type: DataTypes.STRING,
     allowNull: false,
     validate: {
       notEmpty: true,
     }
   },
  }, {});
  Chatroom.associate = function(models) {
    Chatroom.belongsTo(models.event,{
        foreignKey: 'id',
        as: 'chatroom',
    });
  };
  return Chatroom;
};