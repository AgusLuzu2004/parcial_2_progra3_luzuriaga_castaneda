import Administrador from "../models/user_admin.model.js";

export const loginAdmin = async (usuario, contrasena) => {
    console.log("🟡 Datos recibidos del frontend:");
    console.log("Usuario:", usuario);
    console.log("Contraseña:", contrasena);

    const admin = await Administrador.findOne({where: {usuario}});
    if (!admin) {
        console.log("❌ Usuario no encontrado");
        throw new Error('Usuario no encontrado');
    }

    console.log("🟡 Buscando usuario:", usuario);
    console.log("🟡 Hash en la base de datos:", admin.contrasena);

    const esValido = await admin.validarContrasena(contrasena);
    console.log("🔐 ¿Contraseña válida?", esValido);

    if (!esValido) {
        console.log("❌ Contraseña incorrecta");
        throw new Error('Contraseña incorrecta');
    }

    console.log("✅ Login exitoso:", admin.usuario);
    return admin;
};