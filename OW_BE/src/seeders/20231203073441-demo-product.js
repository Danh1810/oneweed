

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Product', [
      {
        product_name: 'Áo Thun Cổ Tròn Ngắn Tay',
        description: 'Chất liệu vải có trọng lượng tương đối sẽ khiến bạn yêu thích và sử dụng nhiều hơn. Kiểu dáng rộng rãi.',
        price: 293000,
        stock_quantity: 50,
        SubCategory_id: 1,
        Store_id: 1,
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
        size: '["S","M","L","XL"]',
        image: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/422992/item/goods_52_422992.jpg?width=750',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Áo Thun Dáng Rộng Ngắn Tay',
        description: 'Áo thun 100% cotton, đã giặt trước để có vẻ ngoài giản dị. Thiết kế khối màu tương phản.',
        price:391000,
        stock_quantity: 100,
         SubCategory_id: 2, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 2, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/457833/item/vngoods_12_457833.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Áo Thun Dáng Rộng Kẻ Sọc Tay Lỡ',
        description: 'Áo thun cotton 100% bền đẹp. Thiết kế và kiểu dáng đẹp mắt.',
        price: 391000,
        stock_quantity: 100,
         SubCategory_id: 3, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 2, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/455414/item/vngoods_44_455414.jpg?width=750',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'AIRism Cotton Áo Thun Cổ Tròn Dáng Rộng',
        description: 'AIRismmịn màng với vẻ ngoài như cotton. Thiết kế sọc bản nhỏ tinh tế.',
        price:391000,
        stock_quantity: 100,
         SubCategory_id: 1, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 4, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/463164/item/vngoods_00_463164.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'KAWS Áo Nỉ Dài Tay',
        description: 'Nghệ sĩ đương đại KAWS. Ra mắt BST áo thun UT độc quyền tại UNIQLO nhân sự kiện ra mắt của ấn bản sách nghệ thuật mới từ KAWS.',
        price:784000,
        stock_quantity: 100,
         SubCategory_id: 2, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 4, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467773/item/vngoods_09_467773.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
          product_name: 'PEANUTS Áo Nỉ Dài Tay',
          description: 'Bộ sưu tập lấy cảm hứng từ bóng chày, môn thể thao yêu thích của những người bạn Peanuts..',
          price:784000,
          stock_quantity: 100,
           SubCategory_id: 2, // Thay thế bằng  SubCategory_id thực tế
          Store_id: 3, // Thay thế bằng Store_id thực tế
          color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
         size: '["S","M","L","XL"]',
          image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/464509/sub/vngoods_464509_sub7.jpg?width=750',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
        product_name: 'HEATTECH Áo Nỉ Lót Lông Có Mũ Kéo Khóa',
        description: 'Dựa trên phản hồi của khách hàng, chúng tôi đã sử dụng sản phẩm HEATTECH để có được sự ấm áp và thoải mái.',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 2, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 2, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/450189/item/vngoods_02_450189.jpg?width=750',
      
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Áo  Bomber Nam',
        description: 'Áo  Bomber Nam Da Lộn Trơn Dây Kéo Form Regular - 10F23JAC001 là mẫu áo khoác bomber trơn đơn giản luôn nhận được sự săn đón của các chàng trai trẻ, yêu thích phong cách cá tính, năng động:',
        price:1178000,
        stock_quantity: 100,
         SubCategory_id: 3, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 1, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://routine.vn/media/amasty/amoptmobile/catalog/product/cache/5b5632a96492396f42c72e22fdd64763/a/o/ao-khoac-nam-10f23jac006_black_1__1_jpg.webp',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Áo  Chần Bông Nam Cổ Trụ',
        description: 'Chất liệu Polyester có nhiều ưu điểm nổi trội như chống nhăn, chống thấm tốt và độ bền cao',
        price:1374000,
        stock_quantity: 100,
         SubCategory_id: 3, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 1, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQKrf-Cvad99Tana0NDllpCXR21TmuGyHoBUFUfneFaDVMmVUCbnfFJK6Wz297Ik0QCWXRO5NR6WKX9l6S7dBIiLDWmTjyaJkA5L64ysm_HzykS3ELgVRtgENwnhV6dguCyd9QwleFvPA&usqp=CAc',
      
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Áo  Nam Tay Dài Nylon',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 2, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 2, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://contents.mediadecathlon.com/p1554129/874ae57ea18eeccdb72af068ce931ee4/p1554129.jpg?f=650x650&format=auto',
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Áo Gi-Lê Đan Len Cổ V',
        description: 'Kết cấu mềm mại và thoáng mát. Thích hợp cho phong cách tinh tế hoặc giản dị.',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 4, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 3, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://maydongphuc.vn/upload/i/pd/dong%20phuc%20ao%20ghi%20le%20nam%20cao%20cap%20tai%20tphcm%20mon%20amie%2005%20376.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Áo Len Vải Sợi Souffle Cổ Tròn Dài Tay',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 4, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 4, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/460950/item/vngoods_01_460950.jpg?width=320',
        
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Áo Cardigan Vải Souffle Cổ Đứng',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 4, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 4, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/461407/item/vngoods_01_461407.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Áo Sơ Mi Không Cần Ủi Slim Fit Dài Tay',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 5, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 3, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462335/item/goods_62_462335.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Áo Sơ Mi Extra Fine Cotton Dài Tay',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 5, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 2, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467494/item/vngoods_62_467494.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Studio Ghibli Áo Sơ Mi Cổ Mở Ngắn Tay',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 5, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 1, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/466530/item/vngoods_09_466530.jpg?width=320',
      
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Áo Polo Dry-EX Ngắn Tay',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 6, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 1, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/452408/item/goods_69_452408.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'AIRism Áo Polo Gài Nút',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 6, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 2, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/441604/item/goods_00_441604.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Áo Polo Vải Dry Pique Ngắn Tay',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 6, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 3, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/456779/item/goods_68_456779.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Quần Jeans Siêu Co Giãn',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 7, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 4, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/455472/item/vngoods_09_455472.jpg?width=320',
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: ' Quần Jeans Dáng Slim Fit',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 7, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 4, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/463906/item/vngoods_66_463906.jpg?width=320',
  
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Quần Jean Selvedge Co Giãn Dáng Slim Fit',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 7, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 3, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/441741/item/goods_30_441741.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Quần thun ống rộng nam',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 8, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 2, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/462842/item/vngoods_38_462842.jpg?width=320',
      
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'COTTON:ONQuần Thun Dài Nam-Loose Fit Track',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 8, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 1, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/461614/item/vngoods_06_461614.jpg?width=750',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Quần Thun Đen 1 Sọc Trắng Ống Suông',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 8, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 1, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ll9181sx8sl2ec',
      
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'DRY-EX Quần Short Siêu Co Giãn',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 9, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 2, // Thay thế bằng Store_id thực tế
       color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455537/item/goods_56_455537.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Quần Chino Short',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 9, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 3, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455533/item/goods_00_455533.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'AirSense Quần Short (Siêu Nhẹ)',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 9, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 4, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/455505/item/vngoods_64_455505.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'AirSense Quần Dài (Quần Dài Siêu Nhẹ)',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 10, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 4, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/461597/item/goods_69_461597.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Quần Smart Pants Dài Đến Mắt Cá (siêu co giãn)',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 10, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 3, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/463458/item/vngoods_06_463458.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Quần Smart Pants Dài Đến Mắt Cá (vải woollike)',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 10, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 2, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/454775/item/goods_69_454775.jpg?width=320',
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },


      {
        product_name: 'Áo thun Extra Fine Cotton Dài Tay',
        description: 'Một sự thoải mái không thể nhầm lẫn cùng chất lượng cao cấp từ cotton. Đa năng với thiết kế co giãn.',
        price:293000,
        stock_quantity: 100,
         SubCategory_id: 11, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 1, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/462672/item/vngoods_22_462672.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'NỮ ÁO THUN HEATTECH EXTRA WARM',
        description: 'Hỗn hợp len mềm mại, không gây ngứa  được phát triển để đáp lại phản hồi của khách hàng.',
        price:784000,
        stock_quantity: 100,
         SubCategory_id:11, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 1, // Thay thế bằng Store_id thực tế
       color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/424873/item/vngoods_12_424873.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'PEACE FOR ALL Lisa Larson Áo Thun Ngắn Tay',
        description: 'Một chiếc áo thun có sức mạnh lan tỏa hòa bình.',
        price:391000,
        stock_quantity: 100,
         SubCategory_id: 11, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 2, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/459567/item/goods_41_459567.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'AIRism Áo Hoodie Chống UV Vải Mắt Lưới (Chống Nắng)',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 12, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 3, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/456261/item/vngoods_52_456261.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Áo Hoddie Kéo Khóa',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 12, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 4, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/461649/item/goods_03_461649.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Áo Hoodie Lót Lông In Họa Tiết Kéo Khóa Dài Tay',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 12, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 4, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/462692/item/vngoods_03_462692.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Áo Khoác Nữ Anti UV Regular',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 13, // Thay thế bằng   SubCategory thực tế
        Store_id: 3, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/462665/item/vngoods_61_462665.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'ÁO KHOÁC THỜI TRANG KIỂU HÀN',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
          SubCategory_id: 13, // Thay thế bằng   SubCategory thực tế
        Store_id: 2, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://thuydungshop.vn/pub/media/wysiwyg/Aokhoacdanu/GKD26/GKD26_4_.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Áo khoác gió nữ',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
          SubCategory_id: 13, // Thay thế bằng   SubCategory thực tế
        Store_id: 1, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://canifa.com/img/1000/1500/resize/6/o/6ot23w020-sn027-m-1-u.webp',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Áo Len Vải Souffle Cổ Cao Dài Tay',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
          SubCategory_id: 14, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 1, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/461085/item/vngoods_61_461085.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Extra Fine Merino Áo Len Vải Gân Cổ Ba Phân',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 14, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 2, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/461033/item/vngoods_32_461033.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Áo Cardigan Dệt 3D Vải Sợi Souffle',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 14, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 3, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/463193/item/vngoods_12_463193.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Áo Vải Rayon Dài Tay',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 15, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 4, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/461034/item/vngoods_14_461034.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Áo Sơ Mi Vải Linen Kẻ Sọc Dài Tay',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 15, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 4, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/458283/item/vngoods_73_458283.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Áo Sơ Mi Extra Fine Cotton Dài Tay',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 15, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 3, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/464804/item/vngoods_11_464804.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Quần Jeans Ống Cong',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 16, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 2, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/463707/item/vngoods_30_463707.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Quần Jean Bầu Siêu Co Giãn',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 16, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 2, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/450617/item/goods_67_450617.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Quần Jeans Dáng Suông Rộn',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 16, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 2, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/460713/item/goods_07_460713.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
      {
        product_name: 'Quần Leggings Lửng Siêu Co Giãn Cạp Cao',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 17, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 2, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/460309/item/vngoods_59_460309.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Quần Leggings Lửng Siêu Co Giãn Cạp Cao',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 17, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 2, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/460537/item/vngoods_69_460537.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Quần tây nữ ống đứng Hàn Quốc',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 18, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 2, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/460311/sub/goods_460311_sub14.jpg?width=750',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Quần tây ống rộng Hàn Quốc',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 18, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 2, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/460311/sub/vngoods_460311_sub8.jpg?width=750',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Quần tây công sở Hàn Quốc',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 18, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 2, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/460311/item/vngoods_06_460311.jpg?width=750',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'AIRism Cotton Áo Thun Cổ Tròn Ngắn Tay',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 19, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 2, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/460701/item/vngoods_69_460701.jpg?width=320',
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Áo Thun Mềm Cổ Tròn Kẻ Sọc Dài Tay',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 19, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 2, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/463191/item/vngoods_69_463191.jpg?width=320',
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'UT MICKEY GO VIETNAM Áo Thun Ngắn Tay',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 19, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 2, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/458896/item/vngoods_01_458896.jpg?width=320',
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Quần Nỉ In Họa Tiết Siêu Co Giãn',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 20, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 2, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/465001/item/vngoods_03_465001.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Áo Nỉ Lót Lông Có Mũ Kéo Khóa',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 20, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 2, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467876/item/vngoods_10_467876.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Áo Nỉ Siêu Co Giãn Dài Tay',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 20, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 2, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/450693/item/goods_03_450693.jpg?width=320',
  
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Áo Len Vải Sợi Cụt tay',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 21, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 2, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/458898/item/vngoods_30_458898.jpg?width=750',
      
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Áo Len Vải Sợi Souffle Ngắn Tay',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 21, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 2, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/458901/item/vngoods_26_458901.jpg?width=320',
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Áo Len Vải Sợi Souffle Dài Tay',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 21, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 2, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
        size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/458899/item/vngoods_01_458899.jpg?width=320',
  
        createdAt: new Date(),
        updatedAt: new Date(),
      },





      // Thêm bản ghi khác tương tự nếu cần
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Product', null, {});
  },
};