'use strict';
module.exports = (sequelize, DataTypes) => {
  const pet_category = sequelize.define('pet_category', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: 'id'
    },     
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    order_number: DataTypes.INTEGER
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
  pet_category.associate = function(models) {
    models.pet_category.belongsToMany(models.pet_profile, {
      through: {
        model: models.pet_profile_category,
        unique: false
      },
      foreignKey: 'pet_category_id'
    })
  };
  return pet_category;
};
