'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_profile', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
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
        type: Sequelize.INTEGER,
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
      gender: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          notEmpty: false
        }
      },
      age: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          notEmpty: false
        }         
      },
      job: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          notEmpty: false
        }
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          notEmpty: false
        }
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          notEmpty: false
        }  
      },
      avatar: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          notEmpty: false
        }  
      },
      self_introduction: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
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
    }).then(function() {
      return queryInterface.sequelize.query(
        `ALTER TABLE user_profile ADD CONSTRAINT user_profile_user_id FOREIGN KEY (user_id) REFERENCES user (id);`
      )
    }).then(function() {
      return queryInterface.sequelize.query(
        `ALTER TABLE user_profile ADD CONSTRAINT user_profile_location_id FOREIGN KEY (location_id) REFERENCES location (id);`
      )
      // return queryInterface.addConstraint('user_profile', 'location_id', {
      //   type: 'foreign key',
      //   name: 'test_location_id',
      //   reference: {
      //     table: 'location',
      //     field: 'id'
      //   },
      //   onDelete: 'set null',
      //   onUpdate: 'set null'
      // })
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user_profile');
  }
};