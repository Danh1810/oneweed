'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ItemCategory', [
      {
  
        name: 'ÁO thun',
        SubCategory_id:1,
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
  
        name: 'ÁO Nỉ',
        SubCategory_id:1,
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
  
        name: 'ÁO khoác',
        SubCategory_id:1,
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
  
        name: 'ÁO Len',
        SubCategory_id:1,
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
  
        name: 'ÁO sơ mi',
        SubCategory_id:1,
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
  
        name: 'ÁO Polo',
        SubCategory_id:1,
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'QUần jeans',
        SubCategory_id:2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'QUần Thun',
        SubCategory_id:2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'QUần Short',
        SubCategory_id:2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'QUần tây',
        SubCategory_id:2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
  
        name: 'ÁO thun',
        SubCategory_id:3,
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
  
        name: 'ÁO hoddie',
        SubCategory_id:3,
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
  
        name: 'ÁO khoác',
        SubCategory_id:3,
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
  
        name: 'ÁO Len',
        SubCategory_id:3,
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
  
        name: 'ÁO sơ mi',
        SubCategory_id:3,
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'QUần jeans',
        SubCategory_id:4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'QUần Leeging',
        SubCategory_id:4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'QUần tây',
        SubCategory_id:4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
  
        name: 'ÁO thun',
        SubCategory_id:5,
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
  
        name: 'ÁO Nỉ',
        SubCategory_id:5,
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
  
        name: 'ÁO Len',
        SubCategory_id:5,
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
  
        name: 'ÁO sơ mi',
        SubCategory_id:5,
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'QUần jeans',
        SubCategory_id:6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'QUần Thun',
        SubCategory_id:6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'QUần Short',
        SubCategory_id:6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'QUần tây',
        SubCategory_id:6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ItemCategory', null, {});
  },
};
