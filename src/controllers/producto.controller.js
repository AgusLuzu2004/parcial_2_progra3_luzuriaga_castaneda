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

import {getProducto, create, findPk, update} from "../services/producto.service.js";

export const getAllProducto = async (req, res) => {
    try {
        const producto = await getProducto();
        res.status(200).json({message: "Lista de productos", payload: producto});
    } catch (error) {
        res.status(500).json({message: "Error interno del servidor", err: error.message});
    }
};

export const createProducto = async (req, res) => {
    try {
        const {users} = req.body;
        if (!users) return res.status(400).json({message: "Todos los campos requeridos"});
        const newProducto = await create({users});
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
    // a completar
};