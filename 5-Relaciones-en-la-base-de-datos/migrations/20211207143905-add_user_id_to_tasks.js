'use strict';

const { sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('tasks', 'userId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'User', 
        key: 'id'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('tasks', 'userId')
  }
};
