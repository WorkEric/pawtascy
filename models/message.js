'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('message', {
   id: {
     type: DataTypes.INTEGER,
     autoIncrement: true,
     primaryKey: true,
     field: 'id'
   },
   chatroom_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
     validate: {
       notEmpty: true,
     }
   },
   user_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
     validate: {
       notEmpty: true,
     }
   },
   content: {
     type: DataTypes.STRING,
     allowNull: true,
   },
  }, {});
  Message.associate = function(models) {
    Message.belongsTo(models.chatroom,{
        foreignKey: 'id',
        as: 'message',
    });
        Message.belongsTo(models.user,{
        foreignKey: 'id',
        as: 'message',
    });
  };
  return Message;
};