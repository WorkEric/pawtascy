'use strict';
module.exports = (sequelize, DataTypes) => {
  const event_information_topic = sequelize.define('event_information_topic', {
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
   event_topic_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
     validate: {
       notEmpty: true,
     },
     reference: {
      model: 'event_topic',
      key: 'id',
      as: 'event_topic_id'
    }
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
  return event_information_topic;
};