import Administrador from './src/models/user_admin.model.js';
import sequelize from './src/config/db-sequelize.js';

const crearAdmin = async () => {
    try {
        await sequelize.sync();
        const nuevoAdmin = await Administrador.create({
            usuario: 'administrador',
            contrasena: '21506005', // Sequelize + bcrypt hook la hashearán automáticamente
        });
        console.log("✅ Admin creado:", nuevoAdmin.usuario);
        process.exit();
    } catch (error) {
        console.error("❌ Error al crear admin:", error.message);
        process.exit(1);
    }
};

crearAdmin();