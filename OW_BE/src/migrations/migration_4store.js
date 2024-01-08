'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'Store',
      {
        Store_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        User_id: {
          type: Sequelize.STRING,
          allowNull: false,
          references: {
            model: 'User',
            key: 'User_id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        Store_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        address: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        phone: {
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
          defaultValue: Sequelize.literal(
            'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
          ),
        },
      },
      {
        charset: 'utf8', // Set the character set for the entire table
        collate: 'utf8_general_ci', // Set the collation for the entire table
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Store')
  },
}
