import {getDetallesByPedidoId, createDetalle} from "../services/detalle_pedido.service.js";

export const listarDetallesPorPedido = async (req, res) => {
    try {
        const {pedidoId} = req.params;
        const detalles = await getDetallesByPedidoId(pedidoId);
        res.json({message: `Detalles del pedido ${pedidoId}`, payload: detalles});
    } catch (error) {
        res.status(500).json({ message: "Error al obtener detalles por pedido", error: error.message });
    }
};

export const crearDetalle = async (req, res) => {
    try {
        const detalles = req.body; // es un array
        if (!Array.isArray(detalles)) {
            return res.status(400).json({message: "El body debe ser un array de detalles"});
        }
        // Guardar cada uno con Promise.all
        const resultados = await Promise.all(detalles.map(det => createDetalle(det)));
        res.status(201).json({message: "Detalles creados correctamente", payload: resultados});
    } catch (error) {
        console.error("❌ ERROR al guardar detalles:", error);
        res.status(500).json({message: "Error al crear los detalles", error: error.message});
    }
};