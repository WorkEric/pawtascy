'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('message', {
   id: {
     type: DataTypes.INTEGER,
     autoIncrement: true,
     primaryKey: true,
     field: 'id',
     unique: true
   },
   chatroom_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
     validate: {
       notEmpty: true,
     },
     reference: {
      model: 'chatroom',
      key: 'id',
      as: 'chatroom_id'
    }
   },
   user_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
     validate: {
       notEmpty: true,
     },
     reference: {
      model: 'user',
      key: 'id',
      as: 'user_id'
    }
   },
   content: {
     type: DataTypes.STRING,
     allowNull: true,
   },
  }, {
    timestamps: true,
    underscored: true,
    paranoid: true,  // 虚拟删除。启用该配置后，数据不会真实删除，而是添加一个deletedAt属性
    createdAt: 'created_at',
    updatedAt: 'updated_at',    
    freezeTableName: true,
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });
  Message.associate = function(models) {
    models.Message.belongsTo(models.chatroom, {foreignKey: 'chatroom_id', targetKey: 'id'})
    models.Message.belongsTo(models.user, {foreignKey: 'user_id', targetKey: 'id'})
  };
  return Message;
};