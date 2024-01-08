'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'User',
      [
        {
          User_id: 'test_id',
          Password: 'hashed_password_1',
          email: 'user1@example.com',
          Role_id: 1,
          full_name: 'Nguyễn Văn A',
          address: '123 Đường Nguyễn Du, Quận 1, TP.Hồ Chí Minh',
          phone_number: '0123-456-789',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('User', null, {})
  },
}
