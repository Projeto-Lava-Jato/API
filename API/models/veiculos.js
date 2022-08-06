'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Veiculos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Veiculos.init({
    codVeiculo: DataTypes.INTEGER,
    cor: DataTypes.STRING,
    marca: DataTypes.STRING,
    placa: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Veiculos',
  });
  return Veiculos;
};