'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_profile = sequelize.define('user_profile', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: 'id',
      unique: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true
      },
      reference: {
        model: 'user',
        key: 'id',
        as: 'user_id'
      }
    },
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        notEmpty: false
      },
      reference: {
        model: 'location',
        key: 'id',
        as: 'location_id'
      }
    },    
    gender: { // option:
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: false
      }
    },
    age: { // option: range of age
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: false
      }      
    },
    job: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: false
      }      
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: false
      }      
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: false
      }      
    },
    avatar: {
      type: DataTypes.STRING, 
      allowNull: true,
      validate: {
        notEmpty: false
      }      
    },
    self_introduction: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  }, {
    timestamps: true,
    underscored: true,
    paranoid: true,  // 虚拟删除。启用该配置后，数据不会真实删除，而是添加一个deletedAt属性
    createdAt: 'created_at',
    updatedAt: 'updated_at',    
    freezeTableName: true,
    charset: 'utf8',
    collate: 'utf8_general_ci',
    indexes: [{
      name: 'user_profile_user_id',
      method: 'BTREE',
      fields: ['user_id']
    }, {
      name: 'user_profile_location_id',
      method: 'BTREE',
      fields: ['location_id']
    }]
  });
  user_profile.associate = function(models) {
    // associations can be defined here
    models.user_profile.belongsTo(models.user, {foreignKey: 'user_id', targetKey: 'id'})
    models.user_profile.belongsTo(models.location, {foreignKey: 'location_id', targetKey: 'id'})
  };
  return user_profile;
};