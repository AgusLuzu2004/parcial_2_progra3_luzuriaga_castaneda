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

export const mostrarDashboardAdmin = async (req, res) => {
    try {
        const response = await fetch("http://localhost:5000/api/productos");
        const data = await response.json();
        const productos = data.payload || [];

        res.render("dashboard_admin", {
            usuario: "admin123",
            productos,
        });
    } catch (error) {
        console.error("Error al cargar productos:", error);
        res.status(500).send("Error al cargar el dashboard");
    }
};

export const mostrarFormularioEditarProducto = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await fetch(`http://localhost:5000/api/productos/${id}`);
        const result = await response.json();
        const producto = result.payload;

        res.render("modificar_producto", { producto });
    } catch (error) {
        console.error("❌ Error al obtener producto:", error.message);
        res.status(500).send("Error al obtener el producto");
    }
};

export const mostrarFormularioNuevoProducto = (req, res) => {
    res.render("alta_producto");
};