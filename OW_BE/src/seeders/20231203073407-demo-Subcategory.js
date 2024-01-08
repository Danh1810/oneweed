'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('SubCategory', [
      {
  
        name: 'ÁO thun',
        Category_id:1,
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
  
        name: 'ÁO Nỉ',
        Category_id:1,
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
  
        name: 'ÁO khoác',
        Category_id:1,
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
  
        name: 'ÁO Len',
        Category_id:1,
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
  
        name: 'ÁO sơ mi',
        Category_id:1,
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
  
        name: 'ÁO Polo',
        Category_id:1,
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'QUần jeans',
        Category_id:2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'QUần Thun',
        Category_id:2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'QUần Short',
        Category_id:2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'QUần tây',
        Category_id:2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
  
        name: 'ÁO thun',
        Category_id:3,
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
  
        name: 'ÁO hoddie',
        Category_id:3,
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
  
        name: 'ÁO khoác',
        Category_id:3,
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
  
        name: 'ÁO Len',
        Category_id:3,
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
  
        name: 'ÁO sơ mi',
        Category_id:3,
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'QUần jeans',
        Category_id:4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'QUần Leeging',
        Category_id:4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'QUần tây',
        Category_id:4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
  
        name: 'ÁO thun',
        Category_id:5,
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
  
        name: 'ÁO Nỉ',
        Category_id:5,
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
  
        name: 'ÁO Len',
        Category_id:5,
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
  
        name: 'ÁO sơ mi',
        Category_id:5,
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'QUần jeans',
        Category_id:6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'QUần Thun',
        Category_id:6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'QUần Short',
        Category_id:6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'QUần tây',
        Category_id:6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('SubCategory', null, {});
  },
};