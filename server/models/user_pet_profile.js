'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_pet_profile = sequelize.define('user_pet_profile', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id'
    },
    pet_profile_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'pet_profile_id'
    }
  }, {
    timestamps: true,
    underscored: true,
    // paranoid: true,  // 虚拟删除。启用该配置后，数据不会真实删除，而是添加一个deletedAt属性
    createdAt: 'created_at',
    updatedAt: 'updated_at',    
    freezeTableName: true,
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });
  return user_pet_profile;
};