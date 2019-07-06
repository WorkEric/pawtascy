'use strict';
module.exports = (sequelize, DataTypes) => {
  const chatroom = sequelize.define('chatroom', {
   id: {
     type: DataTypes.INTEGER,
     autoIncrement: true,
     primaryKey: true,
     field: 'id',
     unique: true
   },
   event_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
     validate: {
       notEmpty: true,
     },
     reference: {
      model: 'event',
      key: 'id',
      as: 'event_id'
    }
   },
   title: {
     type: DataTypes.STRING,
     allowNull: false,
     validate: {
       notEmpty: true,
     }
   },
  }, {
    timestamps: true,
    underscored: true,
    //paranoid: true,  // 虚拟删除。启用该配置后，数据不会真实删除，而是添加一个deletedAt属性
    createdAt: 'created_at',
    updatedAt: 'updated_at',    
    freezeTableName: true,
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });
  chatroom.associate = function(models) {
    models.chatroom.belongsTo(models.event, {foreignKey: 'event_id', targetKey: 'id'})
  };
  return chatroom;
};