import {getProductos,findPk, desactivate, create, update} from "../services/producto.service.js";

export const getAllProductos = async (req, res) => {
    try {
        const productos = await getProductos();
        res.status(200).json({message: "Lista de productos", payload: productos});
    } catch (error) {
        res.status(500).json({message: "Error interno del servidor", err: error.message});
    }
};

export const findProducto = async (req, res) => {
    try {
        const {id} = req.params;
        const productoFound = await findPk(id);
        if (!productoFound) return res.status(404).json({message: "Pedido no encontrado"});
        res.status(200).json({message: "Pedido encontrado con exito", payload: productoFound});
    } catch (error) {
        res.status(500).json({message: "Error interno del servidor en findproduct", err: error.message});
    }
};

export const createProducto = async (req, res) => {
    try {
        const {sku, nombre, activo, precio_normal, categoria, imagen} = req.body;
        const newProducto = await create({sku, nombre, activo, precio_normal, categoria, imagen});
        if (!sku || !nombre || !activo || !precio_normal || !categoria || !imagen) return res.status(400).json({message: "Campos inválidos"});
        res.status(201).json({message: "Producto creado con exito", payload: newProducto});
    } catch (error) {
        res.status(500).json({message: "Error interno del servidor", err: error.message});
    }
};

export const updateProducto = async (req, res) => {
    const {id} = req.params;
    const {nombre, precio_normal, categoria, activo, imagen, sku} = req.body;
    // Validación
    if (!nombre || !precio_normal || !categoria || !sku) {
        return res.status(400).json({ message: "Todos los campos requeridos" });
    }
    try {
        const producto = {nombre, precio_normal, categoria, activo, imagen, sku};
        const resultado = await update(producto, id);
        if (resultado[0] === 0) {
            return res.status(404).json({message: "Producto no encontrado o sin cambios"});
        }
        res.status(200).json({
            message: "Producto actualizado correctamente",
            payload: resultado,
        });
    } catch (error) {
        res.status(500).json({message: "Error interno del servidor", err: error.message});
    }
};


export const deleteProducto = async (req, res) => {
    const {id} = req.params;
    try {
        const resultado = await desactivate(id);
        if (resultado === 0) {
            return res.status(404).json({message: "Producto no encontrado"});
        }
        res.status(200).json({message: "Producto desactivado correctamente", payload: resultado});
    } catch (error) {
        res.status(500).json({message: "Error interno del servidor", err: error.message});
    }
};