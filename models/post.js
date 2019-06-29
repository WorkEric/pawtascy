'use strict';
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
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
   title: {
     type: DataTypes.STRING,
     allowNull: false,
     validate: {
        notEmpty: true,
     }
   },
   is_private: {
     type: DataTypes.BOOLEAN,
     allowNull: false,
     validate: {
       notEmpty: true,
     }
   },
  }, {});
  post.associate = function(models) {
    post.belongsTo(models.user,{
        foreignKey: 'id',
        as: 'post',
    });
  };
  return post;
};