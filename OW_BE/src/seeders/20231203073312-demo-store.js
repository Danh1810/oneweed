'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Store',
      [
        {
          User_id: 'test_id', // Thay thế bằng User_id t"test_id"ực tế
          store_name: 'Rin boutique',
          address: '246 Nguyễn Hoàng, Đà Nẵng',
          phone: '987-654-3210',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          User_id: 'test_id', // Thay thế bằng User_id t"test_id"ực tế
          store_name: 'Davies streetwear',
          address: 'PLAYA 234 Phan Châu Trinh, Hải Châu, Đà Nẵng',
          phone: '012-345-6789',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          User_id: 'test_id', // Thay thế bằng User_id t"test_id"ực tế
          store_name: 'WE Shop',
          address: 'Số 368, Nguyễn Tri Phương, Đà Nẵng',
          phone: '012-345-6789',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          User_id: 'test_id', // Thay thế bằng User_id t"test_id"ực tế
          store_name: 'Salem store',
          address: '66 Trần Tống, Q. Thanh Khê, TP. Đà Nẵng',
          phone: '012-345-6789',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Thêm bản ghi khác tương tự nếu cần
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Store', null, {})
  },
}
