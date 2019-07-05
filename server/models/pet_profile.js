'use strict';

// models: pet_profile
module.exports = (sequelize, DataTypes) => {
  const pet_profile = sequelize.define('pet_profile', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: 'id',
      unique: true
    },    
    nick_name: {
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
    breed: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: false
      }   
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
        notEmpty: false,
        isDate: true,
      }   
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: false
      }  
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: false
      }  
    },
    character: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: false
      }  
    },
    is_neutered: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: true,
      validate: {
        notEmpty: false
      }  
    },
    dislike: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: false
      }  
    },
    health: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: false
      }  
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: false
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
  });
  pet_profile.associate = function(models) {
    models.pet_profile.belongsToMany(models.user, {
      through: {
        model: models.user_pet_profile,
        unique: false
      },
      foreignKey: 'pet_profile_id',
      as: 'users'
    }),    
    models.pet_profile.belongsToMany(models.pet_category, {
      through: {
        model: models.pet_profile_category,
        unique: false
      },
      foreignKey: 'pet_profile_id',
      as: 'petCategories'
    })
  };
  return pet_profile;
};