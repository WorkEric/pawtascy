'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('event', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
        notEmpty: true,
        }
      },
      location_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
        notEmpty: true,
        },
        references: {
          model: {
            tableName: 'location'
          },
          key: 'id'
        },
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
        notEmpty: true,
        }
      },
      event_start_at: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
        notEmpty: true,
        }
      },
      event_end_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      cover: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cost: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      restrict_attendee_number: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      restrict_pets_number: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      is_neutered: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      detail: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
        notEmpty: true,
        }
      },
      note: {
        type: Sequelize.STRING,
        allowNull: true,
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
        `ALTER TABLE event ADD CONSTRAINT event_location FOREIGN KEY (location_id) REFERENCES location (id);`
      )
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('event');
  }
};