import UsuarioService from "../services/UsuarioService";
import ModuloService from "../services/ModuloService";
import IngresoService from "../services/IngresoService";
import BilleteraService from "../services/BilleteraService";
import RedService from "../services/RedService";
const bcrypt = require('bcrypt')
class UsuarioController {

    static getData(req, res) {                           
        IngresoService.getData(req.params.pagina,req.params.num,req.params.prop)
            .then((usuarios) => {                
                res.status(200).send({message:"usuarios lista", result: usuarios });                                               
            })                   
            .catch((reason) => {   
              console.log(reason)           
              res.status(400).send({ message: reason });
            });         
    }

    static getRed(req, res) {                           
        Promise.all([
            RedService.getRed(req.params.id),
            RedService.getReds(req.params.id)
            ])        
            .then(([nodo,xramas]) => {   
                let ramas = xramas.map((it,index)=>{
                    let eok = {
                        "id"   : it.id,
                        "raiz" : it.raiz,
                        "nro"  : it.nro,
                        "nombres"   : it.usuario.nombres,
                        "username"  : it.usuario.nombres,
                        "filename"  : it.usuario.filename
                    }
                    return eok;
                })                          
              res.status(200).send({message:"usuario item", result: { nodo, ramas } });
              
            })                   
            .catch((reason) => {                        
              console.log(reason)
              res.status(400).send({ message: reason });
            });         
      }

      static getItem(req, res) {                           
        Promise.all([
            UsuarioService.getItem(req.params.id),
            BilleteraService.getTotal(req.params.id),
            IngresoService.getTotal(req.params.id)
            ])        
            .then(([usuario,billetera,ingreso]) => {                           
              res.status(200).send({message:"usuario item", result: { usuario, billetera, ingreso } });
              
            })                   
            .catch((reason) => {                        
              console.log(reason)
              res.status(400).send({ message: reason });
            });         
      }  


    static crear(req, res) {           
        UsuarioService.setAdd(req.body)
            .then((usuario)=>{          
              UsuarioService.getData(1,15,'nombres','asc')
              .then((usuarios)=>{
                res.status(200).send({message:"usuario actualizado", result: { usuarios } });
              })       
            })                   
            .catch((reason) => {              
              res.status(400).send({ message: reason });
            });         
    } 
    
      static actualizar(req, res) {                           
        if(req.params.tipo === 'dato')
        {
          UsuarioService.setUpdate(req.body,req.params.id)
          .then((xusuario) => {                
            UsuarioService.getItem(req.params.id)
              .then((usuario)=>{
                UsuarioService.getData(1,15,'nombres','asc')
                  .then((usuarios)=>{
                    res.status(200).send({message:"usuario actualizado", result: { usuarios } });
                  })              
              })        
              .catch((reason) => {                        
                res.status(400).send({ message: reason });
              }) 
          })       
        }else{
          const { password }  = req.body
          let dtn = req.body
          dtn.password =  bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
          UsuarioService.setUpdate(dtn,req.params.id)
          .then((xusuario) => {                
            UsuarioService.getItem(req.params.id)
              .then((usuario)=>{
                UsuarioService.getData(1,15,'nombres','asc')
                .then((usuarios)=>{
                  res.status(200).send({message:"usuario actualizado", result: { usuarios } });
                })               
              })        
              .catch((reason) => {                        
                res.status(400).send({ message: reason });
              }) 
          })
        }
      }
    
      
    
    
    
    
    
      static getItems(req, res) {                   
        UsuarioService.getItems()
            .then((usuarios) => {                
                res.status(200).send({message:"usuarios lista", result: usuarios });                                               
            })                   
            .catch((reason) => {              
              res.status(400).send({ message: reason });
            });         
      }    

static login(req, res) {
    const { username, password } = req.body;    
    UsuarioService.login(username, password)
      .then((user) => {          
        if(user.usuario){                 
          ModuloService.getList(user.usuario.rolId)                       
            .then((modulos) =>{                                               
              res.status(200).send({ user, modulos });
            })        
        }else{
          console.log(user)
          res.status(400).send({ message: user.message });
        }        
      })                   
      .catch((reason) => {             
        console.log(reason) 	    
        res.status(400).send({ message: reason });
    });
  }
}
export default UsuarioController;
