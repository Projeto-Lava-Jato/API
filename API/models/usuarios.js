'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    static associate(models) {
      Usuarios.hasMany(models.Agendamentos)
      Usuarios.hasMany(models.LavaJato)
      Usuarios.hasMany(models.Agendamentos)
      Usuarios.hasMany(models.Lavagens)
      Usuarios.hasMany(models.Veiculos)
    }
  }
  Usuarios.init({
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuarios',
  });
  return Usuarios;
};