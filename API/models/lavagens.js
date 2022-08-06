'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lavagens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Lavagens.init({
    codLav: DataTypes.STRING,
    data: DataTypes.DATEONLY,
    totalServicos: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Lavagens',
  });
  return Lavagens;
};