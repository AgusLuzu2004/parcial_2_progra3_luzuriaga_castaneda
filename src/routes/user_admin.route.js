// routes/hisport-admin.js
import express from 'express';
import {mostrarLogin, login} from '../controllers/user_admin.controller.js';

const router = express.Router();

router.get('/', mostrarLogin);   // Muestra el formulario login_admin.ejs
router.post('/', login);         // Procesa el login del administrador

export default router;