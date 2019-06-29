'use strict';
module.exports = (sequelize, DataTypes) => {
  const event_pet_category = sequelize.define('event_pet_category', {
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
   pet_category_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
     validate: {
       notEmpty: true,
     }
   },
  }, {});
  event_pet_category.associate = function(models) {
    event_pet_category.belongsTo(models.event,{
        foreignKey: 'id',
        as: 'event',
    });
    event_pet_category.belongsTo(models.pet_category,{
        foreignKey: 'id',
        as: 'pet_category',
    });
  };
  return event_pet_category;
};