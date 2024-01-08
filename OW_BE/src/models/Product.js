'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init(
    {
      Product_id: DataTypes.INTEGER,
      product_name: DataTypes.STRING,
      description: DataTypes.STRING, // Corrected spelling here
      price: DataTypes.INTEGER,
      stock_quantity: DataTypes.INTEGER, // Corrected spelling here
      SubCategory_id: DataTypes.INTEGER,
      Store_id: DataTypes.INTEGER,
      color: DataTypes.STRING,
      size: DataTypes.STRING,
      image: DataTypes.JSON,
    },
    {
      charset: 'utf8',
      collate: 'utf8_unicode_ci',
      sequelize,
      modelName: 'Product',
    }
  )
  return Product
}
