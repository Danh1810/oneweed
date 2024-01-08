// seeders/20220106000001-demo-orders.js

'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Order',
      [
        {
          Order_date: new Date(),
          total_amount: 2000,
          User_id: 'test_id', // Thay thế bằng User_id t"test_id"ực tế
          Cart_id:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Order_date: new Date(),
          total_amount: 1200,
          User_id: 'test_id', // Thay thế bằng User_id t"test_id"ực tế
          Cart_id:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Order_date: new Date(),
          total_amount: 1500,
          User_id: 'test_id', // Thay thế bằng User_id t"test_id"ực tế
          Cart_id:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Order_date: new Date(),
          total_amount: 1800,
          User_id: 'test_id', // Thay thế bằng User_id t"test_id"ực tế
          Cart_id:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Order_date: new Date(),
          total_amount: 1000,
          User_id: 'test_id', // Thay thế bằng User_id t"test_id"ực tế
          Cart_id:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Order', null, {})
  },
}
