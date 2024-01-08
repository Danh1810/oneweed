'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // TODO: Implement the logic for creating the 'Role' table
    await queryInterface.createTable('Role', {
      // Define columns here
      Role_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
        
    },
    {
      charset: 'utf8', // Set the character set for the entire table
      collate: 'utf8_general_ci', // Set the collation for the entire table
    });
  },

  down: async (queryInterface, Sequelize) => {
    // TODO: Implement the logic for reverting the changes
    await queryInterface.dropTable('Role');
  },
};
