'use strict';
module.exports = (sequelize, DataTypes) => {
  const post_video = sequelize.define('post_video', {
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
   video_link: {
     type: DataTypes.STRING,
     allowNull: true,
   },
  }, {});
  post_video.associate = function(models) {
    post_video.belongsTo(models.post,{
        foreignKey: 'id',
        as: 'video',
    });
  };
  return post_video;
};