'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductReview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductReview.init({
    ProductReview_id: DataTypes.INTEGER,
    Product_id: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    User_id: DataTypes.INTEGER,
    rating: DataTypes.STRING,
    date: DataTypes.DATE,
  }, {
    charset: 'utf8',
    collate: 'utf8_unicode_ci',
    sequelize,
    modelName: 'ProductReview',
  });
  return ProductReview;
};