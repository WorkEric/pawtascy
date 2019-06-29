'use strict';
module.exports = (sequelize, DataTypes) => {
  const post_paw = sequelize.define('post_paw', {
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
   is_paws: {
     type: DataTypes.BOOLEAN,
     allowNull: false,
     validate: {
       notEmpty: true,
     }
   },
  }, {});
  post_paw.associate = function(models) {
    post_paw.belongsToMany(models.user,{
        foreignKey: 'id',
        as: 'user',
    });
    post_paw.belongsToMany(models.post,{
        foreignKey: 'id',
        as: 'post',
    });
  };
  return post_paw;
};