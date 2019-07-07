'use strict';
module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define('event', {
   id: {
     type: DataTypes.INTEGER,
     autoIncrement: true,
     primaryKey: true,
     field: 'id',
     unique: true
   },
   title: {
     type: DataTypes.STRING,
     allowNull: false,
     validate: {
       notEmpty: true,
     }
   },
   location_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
     validate: {
       notEmpty: true,
     },
     reference: {
      model: 'location',
      key: 'id',
      as: 'location_id'
    }
   },
   address: {
     type: DataTypes.STRING,
     allowNull: false,
     validate: {
       notEmpty: true,
     }
   },
   event_start_at: {
     type: DataTypes.DATE,
     allowNull: false,
     validate: {
       notEmpty: true,
     }
   },
   event_end_at: {
     type: DataTypes.DATE,
     allowNull: true,
   },
   cover: {
     type: DataTypes.STRING,
     allowNull: true,
   },
   cost: {
     type: DataTypes.STRING,
     allowNull: true,
   },
   restrict_attendee_number: {
     type: DataTypes.INTEGER,
     allowNull: true,
   },
   restrict_pets_number: {
     type: DataTypes.INTEGER,
     allowNull: true,
   },
   is_neutered: {
     type: DataTypes.BOOLEAN,
     allowNull: true,
   },
   detail: {
     type: DataTypes.STRING,
     allowNull: false,
     validate: {
       notEmpty: true,
     }
   },
   note: {
     type: DataTypes.STRING,
     allowNull: true,
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
  event.associate = function(models) {
     models.event.hasOne(models.location, {foreignKey: 'id'})
  };
  return event;
};