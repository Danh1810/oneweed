'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'Product',
      {
        Product_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        product_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        price: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        stock_quantity: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        SubCategory_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'SubCategory',
            key: 'SubCategory_id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        Store_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Store',
            key: 'Store_id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        color: {
          type: Sequelize.JSON,
          allowNull: true,
        },
        size: {
          type: Sequelize.JSON,
          allowNull: true,
        },
        image: {
          type: Sequelize.STRING,
          allowNull: true
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
    await queryInterface.dropTable('Product')
  },
}