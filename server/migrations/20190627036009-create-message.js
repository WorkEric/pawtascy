'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('message', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      chatroom_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
        notEmpty: true,
        },
        references: {
          model: {
            tableName: 'chatroom'
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
      content: {
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
        `ALTER TABLE message ADD CONSTRAINT message_chatroom FOREIGN KEY (chatroom_id) REFERENCES chatroom (id);`
      )
    }).then(function() {
      return queryInterface.sequelize.query(
        `ALTER TABLE message ADD CONSTRAINT message_user FOREIGN KEY (user_id) REFERENCES user (id);`
      )
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('message');
  }
};