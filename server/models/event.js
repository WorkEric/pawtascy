'use strict';
module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define('event', {
   id: {
     type: DataTypes.INTEGER,
     autoIncrement: true,
     primaryKey: true,
     field: 'id',
     unique: true
   },
   title: {
     type: DataTypes.STRING,
     allowNull: false,
     validate: {
       notEmpty: true,
     }
   },
   address: {
     type: DataTypes.STRING,
     allowNull: false,
     validate: {
       notEmpty: true,
     }
   },
   event_start_at: {
     type: DataTypes.DATE,
     allowNull: false,
     validate: {
       notEmpty: true,
     }
   },
   event_end_at: {
     type: DataTypes.DATE,
     allowNull: true,
   },
   cover: {
     type: DataTypes.STRING,
     allowNull: true,
   },
   cost: {
     type: DataTypes.STRING,
     allowNull: true,
   },
   restrict_attendee_number: {
     type: DataTypes.INTEGER,
     allowNull: true,
   },
   restrict_pets_number: {
     type: DataTypes.INTEGER,
     allowNull: true,
   },
   is_neutered: {
     type: DataTypes.BOOLEAN,
     allowNull: true,
   },
   detail: {
     type: DataTypes.STRING,
     allowNull: false,
     validate: {
       notEmpty: true,
     }
   },
   note: {
     type: DataTypes.STRING,
     allowNull: true,
   },
   location_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
      reference: {
        model: 'location',
        key: 'id',
        as: 'location_id'
      }
    },  
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
  event.associate = function(models) {
     models.event.belongsTo(models.location, {foreignKey: 'location_id', targetKey: 'id'})
     models.event.belongsToMany(models.user, {
      through: {
        model: models.user_event,
        unique: false
      },
      foreignKey: 'user_id',
      as: 'userEventUsers'
    })
    models.event.belongsToMany(models.user, {
      through: {
        model: models.event_feedback,
        unique: false
      },
      foreignKey: 'user_id',
      as: 'eventFeedbackUsers'
    })
    models.event.belongsToMany(models.event_topic, {
      through: {
        model: models.event_information_topic,
        unique: false
      },
      foreignKey: 'event_topic_id',
      as: 'eventInformationTopicEventTopics'
    })    
    models.event.belongsToMany(models.pet_category, {
      through: {
        model: models.event_pet_category,
        unique: false
      },
      foreignKey: 'pet_category_id',
      as: 'eventPetCategoryPetCategories'
    })     
  };
  return event;
};