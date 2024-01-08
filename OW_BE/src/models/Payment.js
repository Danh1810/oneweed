'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Payment.init({
    Payment_id: DataTypes.INTEGER,
    Order_id: DataTypes.INTEGER,
    Payment_day: DataTypes.Date,
    Payment_method: DataTypes.STRING,
    User_id: DataTypes.INTEGER,
    Amount: DataTypes.INTEGER,
    
  }, {
    charset: 'utf8',
    collate: 'utf8_unicode_ci',
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};