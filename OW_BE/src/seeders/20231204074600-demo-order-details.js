// seeders/20220107000001-demo-order-details.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('OrderDetail', [
      {
        product_id: 1, // Thay thế bằng product_id thực tế
        quantity: 2,
        order_id: 1, // Thay thế bằng order_id thực tế
        subtotal: 400,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 2, // Thay thế bằng product_id thực tế
        quantity: 3,
        order_id: 2, // Thay thế bằng order_id thực tế
        subtotal: 360,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 3, // Thay thế bằng product_id thực tế
        quantity: 1,
        order_id: 1, // Thay thế bằng order_id thực tế
        subtotal: 150,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 1, // Thay thế bằng product_id thực tế
        quantity: 4,
        order_id: 3, // Thay thế bằng order_id thực tế
        subtotal: 720,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 2, // Thay thế bằng product_id thực tế
        quantity: 2,
        order_id: 2, // Thay thế bằng order_id thực tế
        subtotal: 240,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('OrderDetail', null, {});
  },
};
