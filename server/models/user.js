'use strict';

// models: user
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: 'id'
    },
    username: {
      type: DataTypes.STRING,
      field: 'username',
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
        min: 3,
        max: 50,
      }
    },
    email: {
      type:DataTypes.STRING,
      field: 'email',
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true,
      }
    },
    first_name: {
      type: DataTypes.STRING,
      field: 'first_name',
      defaultValue: "",
    },
    last_name: {
      type:DataTypes.STRING,
      field: 'last_name',
      defaultValue: "",
    },
    password: {
      type: DataTypes.STRING,
      field: 'password',
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    salt: {  // not need, handle by bcrypt
      type: DataTypes.STRING,
      field: 'salt',
    },
    is_superuser: {
      type: DataTypes.BOOLEAN,
      field: 'is_superuser',
      allowNull: false,
      defaultValue: false,
    },
    is_staff: {
      type: DataTypes.BOOLEAN,
      field: 'is_staff',
      allowNull: false,
      defaultValue: false,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      field: 'is_active',
      allowNull: false,
      defaultValue: true,
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
  user.associate = function(models) {
    models.user.hasOne(models.user_profile, {foreignKey: 'user_id', sourceKey: 'id', as: 'userProfile'});
    models.user.belongsToMany(models.pet_profile, {
      through: {
        model: models.user_pet_profile,
        unique: false
      },
      foreignKey: 'user_id',
      as: 'petProfiles'
    });
    models.user.belongsToMany(models.event, {
      through: {
        model: models.user_event,
        unique: false
      },
      foreignKey: 'user_id',
      as: 'userEventEvents'
    });
    models.user.belongsToMany(models.event, {
      through: {
        model: models.event_feedback,
        unique: false
      },
      foreignKey: 'user_id',
      as: 'eventFeedbackEvents'
    })     
  };
  return user;
};