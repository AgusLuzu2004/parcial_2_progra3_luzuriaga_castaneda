// import productoDao from "../dao/producto.dao.js";

// const productosController = {
//   async getAll(req, res) {
//     try {
//       const users = await productoDao.getAll();
//       res.json(users);
//     } catch (error) {
//       res.status(500).send("Error en la base de datos.");
//     }
//   }
// }

// export default productosController;

import {getProducto, getProductoWithQuery, create, findPk, update} from "../services/producto.service.js";

export const getAllProducto = async (req, res) => {
    try {
        let {limit, offset} = req.query;
        limit = +limit;
        offset = +offset;
        const producto = await getProducto({limit, offset});
        res.status(200).json({message: "Lista de productos", payload: {limit, offset, ...producto}});
    } catch (error) {
        res.status(500).json({message: "Error interno del servidor", err: error.message});
    }
};

export const getAllProductoWithQuery = async (req, res) => {
    try {
        const {nombre} = req.query;
        const producto = await getProductoWithQuery({nombre});
        if (producto.length === 0) {
            return res.status(404).json({message: "No se encontraron los productos"});
        }
        return res.status(200).json({message: "Lista de productos", payload: producto});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Error interno del servidor", err: error.message});
    }
};

export const createProducto = async (req, res) => {
    try {
        const {nombre} = req.body;
        if (!nombre) return res.status(400).json({message: "Todos los campos requeridos"});
        const newProducto = await create({nombre});
        res.status(201).json({message: "Producto creado con exito", payload: newProducto});
    } catch (error) {
        res.status(500).json({message: "Error interno del servidor", err: error.message});
    }
};

export const findProductoById = async (req, res) => {
    try {
        const {id} = req.params;
        const productoFound = await findPk(id);
        if (!productoFound)
        return res.status(404).json({message: "Producto no encontrado"});
        res.status(200).json({message: "Producto encontrado con exito", payload: productoFound});
    } catch (error) {
        res.status(500).json({message: "Error interno del servidor", err: error.message});
    }
};

export const updateProducto = async (req, res) => {
    try {
            const {id} = req.params;
            const {nombre} = req.body;
            if (!nombre)
                return res.status(400).json({message: "Todos los campos requeridos"});
            const productoUpdated = await update({nombre}, id);
            if (!productoUpdated) {
                return res.status(404).json({message: "Producto no encontrado"});
            }
            res.status(200).json({message: "Producto actualizado con éxito", payload: productoUpdated});
        } catch (error) {
            res.status(500).json({message: "Error interno del servidor", err: error.message});
        }
};