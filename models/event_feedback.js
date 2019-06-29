'use strict';
module.exports = (sequelize, DataTypes) => {
  const event_feedback = sequelize.define('event_feedback', {
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
   user_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
     validate: {
       notEmpty: true,
     }
   },
   rating: {
     type: DataTypes.INTEGER,
     allowNull: false,
     validate: {
       notEmpty: true,
     }
   },
   comment: {
     type: DataTypes.STRING,
     allowNull: true,
   },
  }, {});
  event_feedback.associate = function(models) {
    event_feedback.belongsTo(models.event,{
        foreignKey: 'id',
        as: 'feedback',
    });
    event_feedback.belongsTo(models.user,{
        foreignKey: 'id',
        as: 'feedback',
    });
  };
  return event_feedback;
};