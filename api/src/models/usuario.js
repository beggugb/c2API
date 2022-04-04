const bcrypt = require('bcrypt')
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Usuario.belongsTo(models.Rango, {
        foreignKey: 'rangoId',
        as: 'rango',
      });     
      Usuario.belongsTo(models.Rol, {
        foreignKey: 'rolId',
        as: 'rol',
      }); 
    }
  };
  Usuario.init({
    nombres: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    filename: DataTypes.STRING,
    btc:DataTypes.STRING,
    btcWallet: DataTypes.STRING,    
    estado: DataTypes.STRING,
    email: DataTypes.STRING,
    telefono: DataTypes.STRING,
    vigencia: DataTypes.DATE,
    registrado: DataTypes.BOOLEAN,
    liderId: DataTypes.INTEGER,
    nivel: DataTypes.INTEGER,
    rangoId: DataTypes.INTEGER,
    rolId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  Usuario.prototype.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function(err, isMatch){
      if(err){
        return cb(err);
      }
      cb(null,isMatch);
    })
  };
  
  Usuario.beforeSave((user, options) => {
    if (user.changed('password')) {
      user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    }
  });
  Usuario.beforeUpdate((user, options) => {
    console.log('popop')
    if (user.changed('password')) {
      user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    }
  });
  return Usuario;
};