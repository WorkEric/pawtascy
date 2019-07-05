'use strict';
module.exports = (sequelize, DataTypes) => {
  const post_paw = sequelize.define('post_paw', {
   id: {
     type: DataTypes.INTEGER,
     autoIncrement: true,
     primaryKey: true,
     field: 'id',
     unique: true
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
   post_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
     validate: {
       notEmpty: true,
     },
     reference: {
      model: 'post',
      key: 'id',
      as: 'post_id'
    }
   },
   is_paws: {
     type: DataTypes.BOOLEAN,
     allowNull: false,
     validate: {
       notEmpty: true,
     }
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
  post_paw.associate = function(models) {
    models.post_paw.belongsTo(models.user, {foreignKey: 'user_id', targetKey: 'id'})
    models.post_paw.belongsTo(models.post, {foreignKey: 'post_id', targetKey: 'id'})
  };
  return post_paw;
};