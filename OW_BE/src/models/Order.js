'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    Order_id: DataTypes.INTEGER,
    Order_date: DataTypes.DATE,
    total_amount: DataTypes.INTEGER,
    User_id: DataTypes.INTEGER,
    
  }, {
    charset: 'utf8',
    collate: 'utf8_unicode_ci',
    sequelize,
    modelName: 'Order',
  });
  return Order;
};