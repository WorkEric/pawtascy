'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_pet_profile', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: 'user_id'
      },
      pet_profile_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: 'pet_profile_id'
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(function() {
      return queryInterface.sequelize.query(
        `ALTER TABLE user_pet_profile ADD CONSTRAINT user_pet_profile_user FOREIGN KEY (user_id) REFERENCES user (id);`
      )
    }).then(function(){
      return queryInterface.sequelize.query(
        `ALTER TABLE user_pet_profile ADD CONSTRAINT user_pet_profile_pet_profile FOREIGN KEY (pet_profile_id) REFERENCES pet_profile (id);`
      )
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user_pet_profile');
  }
};