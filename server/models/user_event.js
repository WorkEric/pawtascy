'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_event = sequelize.define('user_event', {
   id: {
     type: DataTypes.INTEGER,
     autoIncrement: true,
     primaryKey: true,
     unique: true,
     field: 'id'
   },
   user_id: {
    type: DataTypes.INTEGER,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true
    },
    reference: {
      model: 'user',
      key: 'id',
      as: 'user_id'
    }
  },
   event_id: {
     type: DataTypes.INTEGER,
     field: 'event_id',
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
   role: {
     type: DataTypes.STRING,
     field: 'role',
     allowNull: false,
     defaultValue: '',
   },
  }, {
    timestamps: true,
    underscored: true,
    // paranoid: true,  // 虚拟删除。启用该配置后，数据不会真实删除，而是添加一个deletedAt属性
    createdAt: 'created_at',
    updatedAt: 'updated_at',    
    freezeTableName: true,
    charset: 'utf8',
    collate: 'utf8_general_ci',  
  });
  return user_event;
};