'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('event_pet_category', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      event_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
        references: {
          model: {
            tableName: 'event'
          },
          key: 'id'
        },
      },
      pet_category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
        references: {
          model: {
            tableName: 'pet_category'
          },
          key: 'id'
        },
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
        `ALTER TABLE event_pet_category ADD CONSTRAINT event_pet_category_event FOREIGN KEY (event_id) REFERENCES event (id);`
      )
    }).then(function() {
      return queryInterface.sequelize.query(
        `ALTER TABLE event_pet_category ADD CONSTRAINT event_pet_category_pet_category FOREIGN KEY (pet_category_id) REFERENCES pet_category (id);`
      )
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('event_pet_category');
  }
};