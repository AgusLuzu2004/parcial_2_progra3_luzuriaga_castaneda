
import pedidos from "../models/pedido.models.js";

export const getPedidos= async() => {
    return await pedidos.findAll() ; // select * from user
};

export const create = async(pedido)=> {
    return await pedidos.create(pedido);
}


export const findPk = async(id)=>{
    return await pedidos.findByPk(id);
}


// put

export const update = async (pedido, id) => {
  return await pedidos.update(pedido, {
    where: { id: id }
  });
};