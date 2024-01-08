// seeders/20220107000005-demo-product-reviews.js

'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'ProductReview',
      [
        {
          product_id: 1, // Thay thế bằng product_id thực tế
          comment: 'Great product!',
          user_id: 'test_id', // Thay thế bằng user_id t"test_id"ực tế
          rating: 5,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 2, // Thay thế bằng product_id thực tế
          comment: 'Not satisfied.',
          user_id: 'test_id', // Thay thế bằng user_id t"test_id"ực tế
          rating: 2,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 3, // Thay thế bằng product_id thực tế
          comment: 'Awesome!',
          user_id: 'test_id', // Thay thế bằng user_id t"test_id"ực tế
          rating: 4,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 1, // Thay thế bằng product_id thực tế
          comment: 'Could be better.',
          user_id: 'test_id', // Thay thế bằng user_id t"test_id"ực tế
          rating: 3,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 2, // Thay thế bằng product_id thực tế
          comment: 'Excellent service!',
          user_id: 'test_id', // Thay thế bằng user_id t"test_id"ực tế
          rating: 5,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ProductReview', null, {})
  },
}
