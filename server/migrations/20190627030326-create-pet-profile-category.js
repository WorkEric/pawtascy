'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pet_profile_category', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pet_profile_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: 'pet_profile_id'
      },
      pet_category_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: 'pet_category_id'
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
        `ALTER TABLE pet_profile_category ADD CONSTRAINT pet_profile_category_pet_profile FOREIGN KEY (pet_profile_id) REFERENCES pet_profile (id);`
      )
    }).then(function() {
      return queryInterface.sequelize.query(
        `ALTER TABLE pet_profile_category ADD CONSTRAINT pet_profile_category_pet_category FOREIGN KEY (pet_category_id) REFERENCES pet_category (id);`
      )
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pet_profile_category');
  }
};