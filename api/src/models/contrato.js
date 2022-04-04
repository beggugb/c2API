'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contrato extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Contrato.belongsTo(models.Usuario, {
        foreignKey: 'usuarioId',
        as: 'usuario',
      });
    }
  };
  Contrato.init({
    motivo: DataTypes.STRING,
    subTotal: DataTypes.DECIMAL,
    totalSaldo: DataTypes.DECIMAL,
    total: DataTypes.DECIMAL,
    estado: DataTypes.STRING,
    fechaContrato: DataTypes.DATE,
    fechaVencimiento: DataTypes.DATE,
    usuarioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Contrato',
  });
  return Contrato;
};