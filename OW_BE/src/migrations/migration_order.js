'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'Order',
      {
        Order_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        Order_date: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        total_amount: {
          type: Sequelize.INTEGER,
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
        Cart_id: {
          type: Sequelize.STRING,
          allowNull: false,
          references: {
            model: 'Cart',
            key: 'Cart_id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
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
    await queryInterface.dropTable('Order')
  },
}
