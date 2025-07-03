<<<<<<< HEAD
import {DataTypes} from "sequelize";
import sequelize from "../config/db-sequelize.js";
import Pedido from "./pedidos.model.js";
import Producto from "./producto.model.js"; // para poder relacionar productos por las dudas

const DetallePedido = sequelize.define("detalle_pedido", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    pedido_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Pedido,
            key: "id"
        },
        onDelete: "CASCADE"
    },
    producto_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Producto,
            key: "id"
        }
    },
    nombre_producto: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    imagen_producto: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    precio_unitario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    subtotal: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, 
{
    freezeTableName: true,
    timestamps: false
});

// Asociaciones
Pedido.hasMany(DetallePedido, {foreignKey: "pedido_id", as: "detalles"});
DetallePedido.belongsTo(Pedido, {foreignKey: "pedido_id", as: "pedido"});

export default DetallePedido;
=======
import { DataTypes } from "sequelize";
import sequelize from "../config/db-sequelize.js";
import Pedido from "./pedido.models.js";
import Producto from "./producto.models.js"; // para poder relacionar productos por las dudas

const DetallePedido = sequelize.define("detalle_pedido", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  pedido_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Pedido,
      key: "id"
    },
    onDelete: "CASCADE"
  },
  producto_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Producto,
      key: "id"
    }
  },
  nombre_producto: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  imagen_producto: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  precio_unitario: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  subtotal: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: "detalle_pedido"
});

// Asociaciones
Pedido.hasMany(DetallePedido, { foreignKey: "pedido_id", as: "detalles" });
DetallePedido.belongsTo(Pedido, { foreignKey: "pedido_id", as: "pedido" });

export default DetallePedido;

>>>>>>> Retomando
