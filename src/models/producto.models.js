import { DataTypes } from "sequelize";
import sequelize from "../config/db-sequelize.js";

const productos = sequelize.define("productos", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  sku: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  activo: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  precio_normal: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  categoria: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  imagen: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  timestamps: false, // desactiva createdAt y updatedAt
  tableName: "productos" // nombre exacto de la tabla en la BD
});

export default productos;
