'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Category.init({
    Category_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    image: DataTypes.STRING
  },
   {
    charset: 'utf8',
    collate: 'utf8_unicode_ci',
    sequelize,
    modelName: 'Category',
  });
  return Category;
};