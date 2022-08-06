'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Servicos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Servicos.init({
    codServico: DataTypes.INTEGER,
    preco: DataTypes.INTEGER,
    tipo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Servicos',
  });
  return Servicos;
};