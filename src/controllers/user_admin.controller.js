import {loginAdmin} from '../services/user_admin.service.js';

export const mostrarLogin = (req, res) => {
    // Muestra la vista login_admin.ejs (GET /api/admin/)
    res.render('login_admin', {error: null});
};

export const login = async (req, res) => {
    const {usuario, contrasena} = req.body;
    console.log("🟡 Datos recibidos del frontend:");
    console.log("Usuario:", usuario);
    console.log("Contraseña:", contrasena);
    try {
        const admin = await loginAdmin(usuario, contrasena);
        // Responder JSON para el fetch (POST /api/admin/)
        return res.status(200).json({usuario: admin.usuario});
        
    } catch (error) {
        // Responder JSON con error
        return res.status(401).json({error: error.message});
    }
};