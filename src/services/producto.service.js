// services
import Producto from "../models/producto.model.js";
import {Op} from "sequelize";

export const getProducto = async ({limit = 10, offset = 0}) => {
    return await Producto.findAndCountAll({
        limit: limit,
        offset: offset,
        order: [["id", "DESC"]]
    });//select * from productos
};

export const getProductoWithQuery = async (query) => {
    return await Producto.findAndCountAll({
        where: {
            [Op.and]: [
                query.nombre
                ? {
                    nombre: {[Op.like]: `${query.nombre}%`}
                }
                : null
            ].filter(Boolean)
        }
    });
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