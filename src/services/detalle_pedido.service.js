import DetallePedido from "../models/detalle_pedido.model.js";

export const getDetallesByPedidoId = async (pedidoId) => {
    return await DetallePedido.findAll({
        where: {pedido_id: pedidoId}
    });
};

export const createDetalle = async (detalleData) => {
    return await DetallePedido.create(detalleData);
};