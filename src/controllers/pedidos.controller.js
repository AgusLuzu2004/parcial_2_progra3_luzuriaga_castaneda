// // controller
import {getPedidos, create, findPk, update} from "../services/pedidos.service.js";

export const getAllPedidos = async (req, res) => {
    try {
        const pedidos = await getPedidos();
        res.status(200).json({message: "Lista de pedidos", payload: pedidos});
    } catch (error) {
        res.status(500).json({message: "Error interno del servidor", err: error.message});
    }
};

export const createPedido = async (req, res) => {
    try {
        const {cliente, total} = req.body;
        if (!cliente || !total) return res.status(400).json({message: "Campos inválidos"});
        const newPedido = await create({cliente, total});
        res.status(201).json({message: "Pedido creado con exito", payload: newPedido});
    } catch (error) {
        res.status(500).json({message: "Error interno del servidor", err: error.message});
    }
};

export const findPedido = async (req, res) => {
    try {
        const {id} = req.params;
        const pedidoFound = await findPk(id);
        if (!pedidoFound) return res.status(404).json({message: "Pedido no encontrado"});
        res.status(200).json({message: "Pedido encontrado con exito", payload: pedidoFound});
    } catch (error) {
        res.status(500).json({message: "Error interno del servidor", err: error.message});
    }
};

export const updatePedido = async (req, res) => {
    const {id} = req.params;
    const pedido = req.body;
    if (!pedido)
        return res.status(400).json({message: "Todos los campos requeridos"});
    try {
        const resultado = await update(pedido, id);
        if (resultado[0] === 0) {
            return res.status(404).json({message: "Pedido no encontrado o sin cambios"});
        }
        res.status(200).json({message: "Pedido actualizado correctamente", payload: resultado});
    } catch (error) {
        res.status(500).json({message: "Error interno del servidor", err: error.message});
    }
};