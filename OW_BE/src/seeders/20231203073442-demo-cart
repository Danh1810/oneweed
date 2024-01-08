// seeders/20220106000001-demo-orders.js

'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Cart',
      [
        {
          Product_id :1,
          total_amount:150000,
          User_id: 'test_id'
        },
    
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cart', null, {})
  },
}
