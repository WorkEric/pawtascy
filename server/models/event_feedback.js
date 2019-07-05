'use strict';
module.exports = (sequelize, DataTypes) => {
  const event_feedback = sequelize.define('event_feedback', {
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
   user_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
     validate: {
       notEmpty: true,
     },
     reference: {
      model: 'user',
      key: 'id',
      as: 'user_id'
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
  event_feedback.associate = function(models) {
    models.event_feedback.belongsTo(models.event, {foreignKey: 'event_id', targetKey: 'id'})
    models.event_feedback.belongsTo(models.user, {foreignKey: 'user_id', targetKey: 'id'})
  };
  return event_feedback;
};