
import database from "../../src/models";
import jwt from "jsonwebtoken";
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const { Red, Usuario } = database;

class RedService {

    static getRed(usuario){
        return new Promise((resolve,reject) =>{            
            Red.findOne({
              raw:true,
              nest:true,
              where: { usuarioId: usuario }    ,
              include:[                
                {model:Usuario,as:"usuario",attributes:["id","nombres","username","filename"]}
            ]           
            })
            .then((row) => resolve( row ))
            .catch((reason)  => reject({ message: reason.message }))  
        })
    }
    static getReds(usuario){
        return new Promise((resolve,reject) =>{            
            Red.findAll({
              raw:true,
              nest:true,
              where: { patrocinadorId: usuario }   ,
              attributes:["id","raiz","patrocinador","usuarioId","patrocinadorId","nro"]   ,
              include:[                
                {model:Usuario,as:"usuario",attributes:["id","nombres","username","filename"]}
            ]         
            })
            .then((row) => resolve( row ))
            .catch((reason)  => reject({ message: reason.message }))  
        })
    }

}
  export default RedService; 