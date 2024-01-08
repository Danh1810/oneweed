'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Role', [
      { 
        type: 'User',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'seller',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Role', null, {});
  },
};
