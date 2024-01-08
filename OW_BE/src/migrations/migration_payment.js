'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'Payment',
      {
        Payment_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        Order_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Order',
            key: 'Order_id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        Payment_day: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        Payment_method: {
          type: Sequelize.STRING,
          allowNull: false,
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
        Amount: {
          type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('Payment')
  },
}
