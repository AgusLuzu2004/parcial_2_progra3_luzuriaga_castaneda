// model
import {DataTypes} from "sequelize";
import sequelize from "../config/db-sequelize.js";
// tabla SQL
const Producto = sequelize.define("productos", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    imagen_url: {
        type: DataTypes.STRING,
        allowNull: true
    },
    categoria_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
},
{
    tableName: "productos",
    timestamps: false
});

const Productos = {
    async getAll() {
        try {
            const productos = await Producto.findAll();
            console.log(productos.map(p => p.toJSON())); // para ver datos limpios
            return productos;
        } catch (error) {
            console.error("Error al obtener productos:", error);
            throw error;
        }
}};

export default Producto; Productos;