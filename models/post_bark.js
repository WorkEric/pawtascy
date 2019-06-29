'use strict';
module.exports = (sequelize, DataTypes) => {
  const post_bark = sequelize.define('post_bark', {
   id: {
     type: DataTypes.INTEGER,
     autoIncrement: true,
     primaryKey: true,
     field: 'id'
   },
   user_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
     validate: {
       notEmpty: true,
     }
   },
   post_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
     validate: {
       notEmpty: true,
     }
   },
   soft_delete: {
     type: DataTypes.BOOLEAN,
     allowNull: false,
     validate: {
       notEmpty: true,
     }
   },
   content: {
     type: DataTypes.STRING,
     allowNull: false,
     validate: {
       notEmpty: true,
     }
   },
   reply_id: {
     type: DataTypes.INTEGER,
     allowNull: true,
   },
  }, {});
  post_bark.associate = function(models) {
    post_bark.belongsToMany(models.user,{
        foreignKey: 'id',
        as: 'user',
    });
  post_bark.belongsToMany(models.post,{
        foreignKey: 'id',
        as: 'post',
    });
  };
  return post_bark;
};