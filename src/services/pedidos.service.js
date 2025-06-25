// services
import Pedido from "../models/pedidos.model.js";
import DetallePedido from "../models/pedidos.model.js";
import {Op} from "sequelize";

export const getPedidos = async ({limit = 10, offset = 0}) => {
    return await Pedido.findAndCountAll({
        limit: limit,
        offset: offset,
        order: [["id", "DESC"]]
    });//select * from pedidos
};

export const getPedidosWithQuery = async (query) => {
    return await Pedido.findAndCountAll({
        where: {
            [Op.and]: [
                query.cliente
                ? {
                    cliente: {[Op.like]: `${query.cliente}%`}
                }
                : null,
                query.total
                ? {
                    total: {[Op.total]: `${query.total}%`}
                }
                : null
            ].filter(Boolean)
        }
    });
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

export const getDetallePedido = async ({limit = 10, offset = 0}) => {
    return await DetallePedido.findAndCountAll({
        limit: limit,
        offset: offset,
        order: [["id", "DESC"]]
    });//select * from detalle_pedido
};

export const getDetallePedidoWithQuery = async (query) => {
    return await DetallePedido.findAll({
        where: {
            [Op.and]: [
                query.detalles
                ? {
                    detalles: {[Op.like]: `${query.detalles}%`}
                }
                : null
            ].filter(Boolean)
        }
    });
};

export const createDetallePedido = async (detalle_pedido) => {
    return await DetallePedido.create(detalle_pedido);
};

export const findPkDetallePedido = async (id) => {
    return await DetallePedido.findByPk(id);
};

export const updateDetallePedido = async (detalle_pedido, id) => {
    return DetallePedido.update(detalle_pedido, {where: {id: id}});
};