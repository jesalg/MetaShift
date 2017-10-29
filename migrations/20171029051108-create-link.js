'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Links', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      meta: {
        type: Sequelize.JSONB
      },
      facebookMeta: {
        type: Sequelize.JSONB
      },
      twitterMeta: {
        type: Sequelize.JSONB
      },
      email: {
        type: Sequelize.STRING
      },
      editHash: {
        allowNull: false,
        type: Sequelize.UUID
      },
      viewHash: {
        allowNull: false,
        type: Sequelize.UUID
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Links');
  }
};
