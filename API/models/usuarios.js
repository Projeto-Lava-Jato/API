'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    static associate(models) {
    }
  }
  Usuarios.init({
    nome: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.INTEGER,
    telefone: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuarios',
  });
  return Usuarios;
};