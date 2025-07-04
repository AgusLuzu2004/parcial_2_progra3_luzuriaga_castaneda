// models/Administrador.js
import {DataTypes} from "sequelize";
import sequelize from "../config/db-sequelize.js";
import bcrypt from 'bcrypt';

const Administrador = sequelize.define('administradores', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuario: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    contrasena: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'administradores',
    timestamps: false,
    hooks: {
        beforeCreate: async (admin) => {
            const salt = await bcrypt.genSalt(10);
            admin.contrasena = await bcrypt.hash(admin.contrasena, salt);
        }
    }
});

    // Método para verificar contraseña
    Administrador.prototype.validarContrasena = async function (contrasena) {
        return await bcrypt.compare(contrasena, this.contrasena);
    };

export default Administrador;