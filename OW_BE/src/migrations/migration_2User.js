'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'User',
      {
        User_id: {
          type: Sequelize.STRING,
          primaryKey: true,
          allowNull: false,
        },
        Password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        Role_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Role',
            key: 'Role_id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        full_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        address: {
          type: Sequelize.STRING,
        },
        phone_number: {
          type: Sequelize.STRING,
        },
        avatar: {
          type: Sequelize.STRING,
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('User')
  },
}
