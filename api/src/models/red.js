'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Red extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Red.belongsTo(models.Usuario, {
        foreignKey: 'usuarioId',
        as: 'usuario',
      });
    }
  };
  Red.init({
    raiz: DataTypes.INTEGER,
    origen: DataTypes.INTEGER,
    patrocinador: DataTypes.INTEGER,
    enabled: DataTypes.BOOLEAN,
    usuarioId: DataTypes.INTEGER,
    patrocinadorId: DataTypes.INTEGER,
    nro: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Red',
  });
  return Red;
};