'use strict';
module.exports = (sequelize, DataTypes) => {
  const post_image = sequelize.define('post_image', {
   id: {
     type: DataTypes.INTEGER,
     autoIncrement: true,
     primaryKey: true,
     field: 'id'
   },
   post_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
     validate: {
       notEmpty: true,
     }
   },
   image_link: {
     type: DataTypes.STRING,
     allowNull: true,
   },
  }, {});
  post_image.associate = function(models) {
    post_image.belongsTo(models.post,{
        foreignKey: 'id',
        as: 'image',
    });
  };
  return post_image;
};