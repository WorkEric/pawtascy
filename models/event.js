'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('event', {
   id: {
     type: DataTypes.INTEGER,
     autoIncrement: true,
     primaryKey: true,
     field: 'id'
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
  }, {});
  Event.associate = function(models) {
      Event.hasOne(models.location,{
        foreignKey: 'id',
        as: 'location',
    });
  };
  return Event;
};