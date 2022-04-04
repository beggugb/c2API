
import database from "../../src/models";
import jwt from "jsonwebtoken";
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const { Pago } = database;

class IngresoService {

    static getTotal(usuario){
        return new Promise((resolve,reject) =>{            
            Pago.findOne({
              raw:true,
              nest:true,
              where: { usuarioId: usuario },
              attributes: [  
                [Sequelize.fn('count',Sequelize.col('id')),'total'],
                [Sequelize.fn('sum',Sequelize.col('total')),'suma']]               
            })
            .then((row) => resolve( row ))
            .catch((reason)  => reject({ message: reason.message }))  
        })
    }
    static getData(pag,num,usuario){
      return new Promise((resolve,reject) =>{            
        let page = parseInt(pag);
        let der = num * page - num;
          Pago.findAndCountAll({
            raw: true,
            nest: true,
            offset: der,
            limit: num,
            where: { usuarioId: usuario },
          })
          .then((rows) => resolve({
            paginas: Math.ceil(rows.count / num),
            pagina: page,
            total: rows.count,
            data: rows.rows
          }))
          .catch((reason) => reject({ message: reason.message }))
      })
  }

}
  export default IngresoService; 