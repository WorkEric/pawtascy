'use strict';
module.exports = (sequelize, DataTypes) => {
  const location = sequelize.define('location', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: 'id',
      unique: true
    },
    city: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      defaultValue: '',
      validate: {
        notEmpty: true,
      }      
    },
    state: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      defaultValue: '',
      validate: {
        notEmpty: true,
      }       
    },
    country: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      defaultValue: '',
      validate: {
        notEmpty: true,
      }       
    },
    zip_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        notEmpty: false
      }
    },
    time_zone: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Africa/Bissau',  // GWT
      validate: {
        notEmpty: true
      }
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
    indexes: [
      {
        unique: true,
        fields: ['city', 'state', 'country']
      }
    ]
  });
  location.associate = function(models) {
    models.location.hasMany(models.user_profile, {foreignKey: 'location_id', sourceKey: 'id', as: 'userProfile'});
  };
  return location;
};