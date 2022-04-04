'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rango extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Rango.init({
    nombre: DataTypes.STRING,
    filename: DataTypes.STRING,
    puntos: DataTypes.INTEGER,
    las: DataTypes.INTEGER,
    limite: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Rango',
  });
  return Rango;
};