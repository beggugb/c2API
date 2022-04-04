import usuarios from './usuarioRoutes'

export default(app) => {    
    app.use('/api/usuarios',usuarios);             
}

