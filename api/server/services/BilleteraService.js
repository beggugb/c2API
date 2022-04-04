
import database from "../../src/models";
import jwt from "jsonwebtoken";
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const { Billetera } = database;

class BilleteraService {

    static getTotal(usuario){
        return new Promise((resolve,reject) =>{            
            Billetera.findOne({
              raw:true,
              nest:true,
              where: { usuarioId: usuario }              
            })
            .then((row) => resolve( row ))
            .catch((reason)  => reject({ message: reason.message }))  
        })
      }

}
  export default BilleteraService; 