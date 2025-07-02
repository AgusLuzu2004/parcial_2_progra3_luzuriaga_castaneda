// services
import Pedido from "../models/pedidos.model.js";

export const getPedidos = async () => {
    return await Pedido.findAll();
};

export const create = async(pedido)=> {
    return await Pedido.create(pedido);
};

export const findPk = async(id)=>{
    return await Pedido.findByPk(id);
};

export const update = async (pedido, id) => {
    return await Pedido.update(pedido, {
        where: {id: id}
    });
};