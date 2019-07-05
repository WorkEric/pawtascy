'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('event_feedback', {
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
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
        references: {
          model: {
            tableName: 'user'
          },
          key: 'id'
        },
      },
      rating: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
      },
      comment: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(function() {
      return queryInterface.sequelize.query(
        `ALTER TABLE event_feedback ADD CONSTRAINT event_feedback_user FOREIGN KEY (user_id) REFERENCES user (id);`
      )
    }).then(function() {
      return queryInterface.sequelize.query(
        `ALTER TABLE event_feedback ADD CONSTRAINT event_feedback_event FOREIGN KEY (event_id) REFERENCES event (id);`
      )
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('event_feedback');
  }
};