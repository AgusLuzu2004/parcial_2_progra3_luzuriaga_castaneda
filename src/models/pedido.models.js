import { DataTypes } from "sequelize";
import sequelize from "../config/db-sequelize.js";

const Pedido = sequelize.define(
  "pedidos",  // es el nombre de la tabla en la BD
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    cliente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW, // guarda fecha y hora automáticamente
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    timestamps: false,      // NO crea columnas createdAt / updatedAt
    freezeTableName: true,  // usa nombre exacto 'pedidos'
  }
);

export default Pedido;
