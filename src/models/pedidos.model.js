// model
import {DataTypes} from "sequelize";
import sequelize from "../config/db-sequelize.js";
// tabla SQL
const Pedido = sequelize.define("pedidos", {
  //columna id
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    // columna
    cliente: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // columna
    fecha: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    total: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, 
{
    freezeTableName: true,
    timestamps: false
});

export default Pedido;