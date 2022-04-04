'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NotaCobranza extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      NotaCobranza.belongsTo(models.Contrato, {
        foreignKey: 'contratoId',
        as: 'contrato',
      });
    }
  };
  NotaCobranza.init({
    nro: DataTypes.INTEGER,
    tipo: DataTypes.STRING,
    montoTotal: DataTypes.DECIMAL,
    pagoTotal: DataTypes.DECIMAL,
    saldoTotal: DataTypes.DECIMAL,
    fechaVencimiento: DataTypes.DATE,
    cuotas: DataTypes.INTEGER,
    detalle: DataTypes.STRING,
    contratoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'NotaCobranza',
  });
  return NotaCobranza;
};