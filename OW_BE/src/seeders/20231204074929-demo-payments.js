'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */ // seeders/20220107000002-demo-payments.js

    'use strict'

    module.exports = {
      up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
          'Payment',
          [
            {
              order_id: 1, // Thay thế bằng order_id thực tế
              payment_day: new Date(),
              payment_method: 'Credit Card',
              user_id: 'test_hehe', // Thay thế bằng user_id t"test_hehe"ực tế
              amount: 500,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              order_id: 2, // Thay thế bằng order_id thực tế
              payment_day: new Date(),
              payment_method: 'PayPal',
              user_id: 'test_hehe', // Thay thế bằng user_id t"test_hehe"ực tế
              amount: 700,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              order_id: 3, // Thay thế bằng order_id thực tế
              payment_day: new Date(),
              payment_method: 'Bank Transfer',
              user_id: 'test_hehe', // Thay thế bằng user_id t"test_hehe"ực tế
              amount: 300,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              order_id: 2, // Thay thế bằng order_id thực tế
              payment_day: new Date(),
              payment_method: 'Credit Card',
              user_id: 'test_hehe', // Thay thế bằng user_id t"test_hehe"ực tế
              amount: 900,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              order_id: 1, // Thay thế bằng order_id thực tế
              payment_day: new Date(),
              payment_method: 'PayPal',
              user_id: 'test_hehe', // Thay thế bằng user_id t"test_hehe"ực tế
              amount: 600,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ],
          {}
        )
      },

      down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Payment', null, {})
      },
    }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
}
