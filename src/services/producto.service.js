// services
import Producto from "../models/producto.model.js";

export const getProductos = async () => {
    return await Producto.findAll();//select * from productos
};

export const create = async (producto) => {
    return await Producto.create(producto);
};

export const update = async (producto, id) => {
    return await Producto.update(producto, {where: {id: id}});
};

export const desactivate = async (id) => {
    return await Producto.update({activo: false}, {where: {id: id}});
};