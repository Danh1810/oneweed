'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Category', [
      {
        name: 'Áo nam',
        image:'https://owen.cdn.vccloud.vn/media/catalog/product/cache/d2d00acd24420b2884efc2be677df778/t/s/tsn231454.png',
        
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'QUần Nam ',
        image:'https://owen.cdn.vccloud.vn/media/catalog/product/cache/d2d00acd24420b2884efc2be677df778/q/j/qjs230156.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
  
        name: 'ÁO Nữ',
        image:'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455752/item/goods_12_455752.jpg?width=750',
       
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'QUần Nữ',
        image:'https://product.hstatic.net/1000285106/product/75063cd7-9cb6-4b41-b9a4-5ae285195d01_a956259dc8b64f43b6f6f044b63365dd_1024x1024.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
  
        name: 'ÁO Trẻ em',
        image:'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/450071001/item/goods_53_450071001.jpg?width=750',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'QUần Trẻ em',
        image:'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455009/item/goods_12_455009.jpg?width=750',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Áo khoác nam',
        image:'https://savani.vn/images/products/2022/12/19/small/ao-khoac-gio-nam-mag012-2-g7002-1_1671423017.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      ,{
        name: 'Đồ liền thân nam',
        image:'https://down-vn.img.susercontent.com/file/sg-11134201-7rblk-lo769qmwb4ay23',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      ,{
        name: 'Đồ liền thân nữ',
        image:'https://vcdn.acfc.com.vn/media/catalog/product/cache/1590496433db240c9566f569680d296c/7/u/7uuab-20-5_xnqsrvsr3ctknzpm.webp',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,{
        name: 'Váy nữ',
        image:'https://toplistdanang.com/wp-content/uploads/2019/11/Shop-vay-da-nang-16_optimized_optimized-768x768.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      ,{
        name: 'Váy cưới',
        image:'https://kimcouture.vn/wp-content/uploads/2022/11/vay-cuoi-lam-le-Limited-LLM05-1.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      ,{
        name: 'Đầm',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDK8ka17f3bPvmg862FfeMhclHUYAKaR73LA&usqp=CAU',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      ,{
        name: 'Đồ lót',
        image:'https://mcdn.coolmate.me/image/May2022/shop-quan-lot-nam-cao-cap-tai-da-nang-tot-nhat_268.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
       ,{
        name: 'Đồ ngủ',
        image:'https://ivysweethome.com/wp-content/uploads/2023/03/Bo-Ngu-Pijama-Lua-IvySweetHome.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
       ,{
        name: 'Phụ kiện',
        image:'https://down-vn.img.susercontent.com/file/2ebf02d7b5bf1a2cbd1eb0754000c910',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      ,{
        name: 'Vớ tất',
        image:'https://down-vn.img.susercontent.com/file/e7f82662a40abd2da47f7a29189a4b68',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Đồ bầu',
        image:'https://down-vn.img.susercontent.com/file/sg-11134201-22090-ovut0nyfowhv3c',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Đồ hóa trang',
        image:'https://down-vn.img.susercontent.com/file/e37199732b58e8860620670d862a1a3c',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      ,{
        name: 'Đồ tập',
        image:'https://down-vn.img.susercontent.com/file/c65c97e476a2a92563151050a86aab25',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Áo choàng',
        image:'https://down-vn.img.susercontent.com/file/9365bf72ce2af70d0e276aea91dc477e',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Áo Cardigan',
        image:'https://aogiap.com/wp-content/uploads/2021/03/14955868_1169034163184802_652494893664619451_n-300x300.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      
      
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Category', null, {});
  },
};