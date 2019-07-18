'use strict';
module.exports = (sequelize, DataTypes) => {
  const event_pet_category = sequelize.define('event_pet_category', {
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
   pet_category_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
     validate: {
       notEmpty: true,
     },
     reference: {
      model: 'pet_category',
      key: 'id',
      as: 'pet_category_id'
    }
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
  return event_pet_category;
};