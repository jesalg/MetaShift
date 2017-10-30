'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Links', 'viewHash', {
        type: Sequelize.STRING,
        allowNull: false
    }).then(function() {

    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Links', 'viewHash', {
        type: Sequelize.UUID,
        allowNull: false
    }).then(function() {

    });
  }
};
