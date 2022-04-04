'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pago extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pago.belongsTo(models.Usuario, {
        foreignKey: 'usuarioId',
        as: 'usuario',
      });
      Pago.belongsTo(models.Contrato, {
        foreignKey: 'contratoId',
        as: 'contrato',
      });
    }
  };
  Pago.init({
    monto: DataTypes.DECIMAL,
    estado: DataTypes.BOOLEAN,
    porcentaje: DataTypes.INTEGER,
    sistema: DataTypes.DECIMAL,
    total: DataTypes.DECIMAL,
    contratoId: DataTypes.INTEGER,
    usuarioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pago',
  });
  return Pago;
};