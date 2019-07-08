'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('event_information_topic', {
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
      event_topic_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
        references: {
          model: {
            tableName: 'event_topic'
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
        `ALTER TABLE event_information_topic ADD CONSTRAINT event_information_topic_event_id FOREIGN KEY (event_id) REFERENCES event (id);`
      )
    }).then(function() {
      return queryInterface.sequelize.query(
        `ALTER TABLE event_information_topic ADD CONSTRAINT event_information_topic_event_topic_id FOREIGN KEY (event_topic_id) REFERENCES event_topic (id);`
      )
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('event_information_topic');
  }
};