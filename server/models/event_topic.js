'use strict';
module.exports = (sequelize, DataTypes) => {
  const event_topic = sequelize.define('event_topic', {
   id: {
     type: DataTypes.INTEGER,
     autoIncrement: true,
     primaryKey: true,
     field: 'id',
     unique: true
   },
   topic: {
     type: DataTypes.STRING,
     allowNull: false,
     validate: {
       notEmpty: true,
     }
   },
   order_number: {
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
  event_topic.associate = function(models) {
    // associations can be defined here
  };
  return event_topic;
};