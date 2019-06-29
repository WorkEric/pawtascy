'use strict';
module.exports = (sequelize, DataTypes) => {
  const event_information_topic = sequelize.define('event_information_topic', {
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
   event_topic_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
     validate: {
       notEmpty: true,
     }
   },
  }, {});
  event_information_topic.associate = function(models) {
    event_information_topic.belongsTo(models.event,{
        foreignKey: 'id',
        as: 'event',
    });
    event_information_topic.hasOne(models.event_topic,{
        foreignKey: 'id',
        as: 'event_topic',
    });
  };
  return event_information_topic;
};