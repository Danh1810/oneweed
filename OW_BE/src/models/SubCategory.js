'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubCaterory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SubCaterory.init({
    SubCaterory_id: DataTypes.INTEGER,
    Name: DataTypes.STRING,
    Category_id: DataTypes.INTEGER,
    
  }, {
    charset: 'utf8',
    collate: 'utf8_unicode_ci',
    sequelize,
    modelName: 'SubCaterory',
  });
  return SubCaterory;
};