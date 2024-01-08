'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Role.init({
    Role_id: DataTypes.INTEGER,
    type: DataTypes.STRING,
    
  }, {
    charset: 'utf8',
    collate: 'utf8_unicode_ci',
    sequelize,
    modelName: 'Role',
  });
  return Role;
};