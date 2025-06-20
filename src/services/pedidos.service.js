// services
import Pedido from "../models/pedidos.model.js";
import DetallePedido from "../models/pedidos.model.js";

export const getPedidos = async () => {
    return await Pedido.findAll();//select * from pedidos
};

export const createPedidos = async (pedido) => {
    return await Pedido.create(pedido);
};

export const findPkPedidos = async (id) => {
    return await Pedido.findByPk(id);
};

export const updatePedidos = async (pedido, id) => {
    return Pedido.update(pedido, {where: {id: id}});
};

export const getDetallePedido = async () => {
    return await DetallePedido.findAll();//select * from detalle_pedido
};

export const createDetallePedido = async (detalle_pedido) => {
    return await DetallePedido.create(detalle_pedido);
};

export const findPkDetallePedido = async (id) => {
    return await Pedido.findByPk(id);
};

export const updateDetallePedido = async (detalle_pedido, id) => {
    return Pedido.update(detalle_pedido, {where: {id: id}});
};

// export default { getPedidos };
// export default { getDetallePedido };