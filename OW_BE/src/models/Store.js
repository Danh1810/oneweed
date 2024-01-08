'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Store.init({
    Store_id: DataTypes.INTEGER,
    User_id: DataTypes.INTEGER,
    Store_name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    charset: 'utf8',
    collate: 'utf8_unicode_ci',
    sequelize,
    modelName: 'Store',
  });
  return Store;
};