// model
import {DataTypes} from "sequelize";
import sequelize from "../config/db-sequelize.js";
// tabla SQL
const Pedido = sequelize.define("pedidos", {
  //columna id
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    // columna
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    // columna
    fecha: {
        type: DataTypes.DOUBLE,
        defaultValue: DataTypes.NOW,
        allowNull: true
    },
    total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    estado: {
        type: DataTypes.ENUM("pendiente", "pagado", "enviado", "entregado", "cancelado"),
        defaultValue: "pendiente"
    }
}, 
{
    tableName: "pedidos",
    timestamps: false
});

const DetallePedido = sequelize.define("detalle_pedido", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    pedido_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    producto_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nombre_producto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagen_producto: {
        type: DataTypes.STRING,
        allowNull: true
    },
    precio_unitario: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    subtotal: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
},
{
    tableName: "detalle_pedido",
    timestamps: false
});

export default Pedido; DetallePedido;