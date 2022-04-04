import { Router } from 'express';
import UsuarioController from '../controllers/UsuarioController';

const router = Router();

router.post('/login', UsuarioController.login);
router.get('/item/:id',UsuarioController.getItem)
router.get('/red/items/:id',UsuarioController.getRed)
router.get('/data/:pagina/:num/:prop',UsuarioController.getData)
export default router;
