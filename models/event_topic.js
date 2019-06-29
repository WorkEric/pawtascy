'use strict';
module.exports = (sequelize, DataTypes) => {
  const event_topic = sequelize.define('event_topic', {
   id: {
     type: DataTypes.INTEGER,
     autoIncrement: true,
     primaryKey: true,
     field: 'id'
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
  }, {});
  event_topic.associate = function(models) {
    // associations can be defined here
  };
  return event_topic;
};