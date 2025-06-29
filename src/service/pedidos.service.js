import pedidos from "../models/pedido.models.js";

export const getPedidos= async() => {
    return await pedidos.findAll() ; // select * from user
};


