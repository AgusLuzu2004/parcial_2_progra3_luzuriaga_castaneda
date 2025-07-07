// routes/hisport-admin.js
import express from 'express';
import {mostrarLogin, login, mostrarDashboardAdmin, mostrarFormularioEditarProducto, mostrarFormularioNuevoProducto} from '../controllers/user_admin.controller.js';
import {isAdmin} from "../middlewares/isAdmin.js";

const router = express.Router();

router.get('/', mostrarLogin);   // Muestra el formulario login_admin.ejs
router.post('/', login);         // Procesa el login del administrador
router.get("/dashboard", isAdmin, mostrarDashboardAdmin);
router.get("/productos/:id/editar", isAdmin, mostrarFormularioEditarProducto);
router.get("/productos/nuevo-producto", isAdmin, mostrarFormularioNuevoProducto);

export default router;