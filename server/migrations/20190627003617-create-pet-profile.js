'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pet_profile', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nick_name: {
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
      breed: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          notEmpty: false
        }  
      },
      birthday: {
        type: Sequelize.DATE,
        allowNull: true,
        validate: {
          notEmpty: false,
          isDate: true,
        }   
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          notEmpty: false
        }  
      },
      weight: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          notEmpty: false
        }  
      },
      character: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          notEmpty: false
        }  
      },
      is_neutered: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: true,
        validate: {
          notEmpty: false
        }  
      },
      dislike: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          notEmpty: false
        }          
      },
      health: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          notEmpty: false
        }         
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          notEmpty: false
        }  
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pet_profile');
  }
};