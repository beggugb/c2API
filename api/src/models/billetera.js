'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Billetera extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Billetera.belongsTo(models.Usuario, {
        foreignKey: 'usuarioId',
        as: 'usuario',
      });
    }
  };
  Billetera.init({
    nroBilletera: DataTypes.INTEGER,
    password: DataTypes.STRING,
    estado: DataTypes.BOOLEAN,
    recibido: DataTypes.DECIMAL,
    cobrado: DataTypes.DECIMAL,
    saldo: DataTypes.DECIMAL,
    total: DataTypes.DECIMAL,
    usuarioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Billetera',
  });
  return Billetera;
};