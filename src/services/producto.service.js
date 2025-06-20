// services
import Producto from "../models/producto.model.js";

export const getProducto = async () => {
    return await Producto.findAll();//select * from productos
};

export const create = async (producto) => {
    return await Producto.create(producto);
};

export const findPk = async (id) => {
    return await Producto.findByPk(id);
};

export const update = async (producto, id) => {
    return Producto.update(producto, {where: {id: id}});
};

// export default { getProducto };