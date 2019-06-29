'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('location', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '',
        validate: {
          notEmpty: true,
        }
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '',
        validate: {
          notEmpty: true,
        }        
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '',
        validate: {
          notEmpty: true,
        }
      },
      zip_code: {
        type: Sequelize.INTEGER
      },
      time_zone: {
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
    }, 
    // {
    //   uniqueKeys: {
    //     actions_unique: {
    //       fields: ['city', 'state', 'country']
    //     }
    //   }
    // }
  )},
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('location');
  }
};