// import pedidoDao from "../dao/pedidos.dao.js";

// const pedidosController = {
//   async guardar(req, res) {
//     try {
//       const { cliente, total } = req.body;
//       if (!cliente || !total) {
//         return res.status(400).json({error: "Faltan datos del pedido"});
//       }
//       const id = await pedidoDao.guardar({cliente, total});
//       res.status(201).json({id, cliente, total});
//     } catch (error) {
//       console.error("Error al guardar el pedido:", error);
//       res.status(500).json({error: "Error en la base de datos"});
//     }
//   }
// };

// const pedidoDetalleController = {
//   async guardarDetalle(req, res) {
//     try {
//       const detalles = req.body; // Esperamos un array de objetos

//       if (!Array.isArray(detalles) || !detalles.length) {
//         return res.status(400).json({error: 'Se espera un array de detalles'});
//       }

//       const resultado = await pedidoDao.guardarDetalle(detalles);
//       res.status(201).json({message: 'Detalle de pedido guardado', id: resultado.insertId});
//     } catch (error) {
//       console.error('Error guardando detalle de pedido:', error);
//       res.status(500).json({error: 'Error interno del servidor'});
//     }
//   }
// };

// export  {
//   pedidosController,
//   pedidoDetalleController
// };

// // controller
import {getPedidos, getPedidosWithQuery, createPedidos, findPkPedidos, updatePedidos} from "../services/pedidos.service.js";
import {getDetallePedido, getDetallePedidoWithQuery, createDetallePedido, findPkDetallePedido, updateDetallePedido} from "../services/pedidos.service.js";

export const getAllPedidos = async (req, res) => {
    try {
        let {limit, offset} = req.query;
        const parsedLimit = parseInt(limit);
        const parsedOffset = parseInt(offset);
        const finalLimit = isNaN(parsedLimit) ? 10 : parsedLimit;
        const finalOffset = isNaN(parsedOffset) ? 0 : parsedOffset;
        const pedidos = await getPedidos({limit: finalLimit, offset: finalOffset});
        res.status(200).json({message: "Lista de pedidos", payload: {limit: finalLimit, offset: finalOffset, ...pedidos}});
    } catch (error) {
        res.status(500).json({message: "Error interno del servidor", err: error.message});
    }
};

export const getAllPedidosWithQuery = async (req, res) => {
    try {
        const {cliente, total} = req.query;
        const pedidos = await getPedidosWithQuery({cliente, total});
        if (pedidos.length === 0) {
            return res.status(404).json({message: "No se encontraron los pedidos"});
        }
        return res.status(200).json({message: "Lista de pedidos", payload: pedidos});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Error interno del servidor", err: error.message});
    }
};

export const createPedido = async (req, res) => {
    try {
        const {cliente, total} = req.body;
        if (!cliente || !total) return res.status(400).json({message: "Todos los campos requeridos"});
        const newPedido = await createPedidos({cliente, total});
        res.status(201).json({message: "Pedido creado con exito", payload: newPedido});
    } catch (error) {
        res.status(500).json({message: "Error interno del servidor", err: error.message});
    }
};

export const findPedidoById = async (req, res) => {
    try {
        const {id} = req.params;
        const pedidoFound = await findPkPedidos(id);
        if (!pedidoFound)
        return res.status(404).json({message: "Pedido no encontrado"});
        res.status(200).json({message: "Pedido encontrado con exito", payload: pedidoFound});
    } catch (error) {
        res.status(500).json({message: "Error interno del servidor", err: error.message});
    }
};

export const updatePedido = async (req, res) => {
    try {
        const {id} = req.params;
        const {cliente, total} = req.body;
        if (!cliente || !total)
            return res.status(400).json({message: "Todos los campos requeridos"});
        const pedidoUpdated = await updatePedidos({cliente, total}, id);
        if (!pedidoUpdated) {
            return res.status(404).json({message: "Pedido no encontrado"});
        }
        res.status(200).json({message: "Pedido actualizado con éxito", payload: pedidoUpdated});
    } catch (error) {
        res.status(500).json({message: "Error interno del servidor", err: error.message});
    }
};

export const getAllDetallePedido = async (req, res) => {
    try {
        let {limit, offset} = req.query;
        limit = +limit;
        offset = +offset;
        const detallePedido = await getDetallePedido({limit, offset});
        res.status(200).json({message: "Lista de detalle de pedido", payload: detallePedido});
    } catch (error) {
        res.status(500).json({message: "Error interno del servidor", err: error.message});
    }
};

export const getAllDetallePedidoWithQuery = async (req, res) => {
    try {
        const {detalles} = req.query;
        const detallePedido = await getDetallePedidoWithQuery({detalles});
        if (detallePedido.length === 0) {
            return res.status(404).json({message: "No se encontró el detalle de pedido"});
        }
        return res.status(200).json({message: "Lista de detalle de pedido", payload: detallePedido});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Error interno del servidor", err: error.message});
    }
};

export const createDetallePedidos = async (req, res) => {
    try {
        const {detalles} = req.body;
        if (!detalles) return res.status(400).json({message: "Todos los campos requeridos"});
        const newDetallePedido = await createDetallePedido({detalles});
        res.status(201).json({message: "Detalle de pedido creado con exito", payload: newDetallePedido});
    } catch (error) {
        res.status(500).json({message: "Error interno del servidor", err: error.message});
    }
};

export const findDetallePedidoById = async (req, res) => {
    try {
        const {id} = req.params;
        const detallePedidoFound = await findPkDetallePedido(id);
        if (!detallePedidoFound)
        return res.status(404).json({message: "Detalle de pedido no encontrado"});
        res.status(200).json({message: "Detalle de pedido encontrado con exito", payload: detallePedidoFound});
    } catch (error) {
        res.status(500).json({message: "Error interno del servidor", err: error.message});
    }
};

export const updateDetallePedidos = async (req, res) => {
    try {
        const {id} = req.params;
        const {detalles} = req.body;
        if (!detalles)
            return res.status(400).json({message: "Todos los campos requeridos"});
        const detallePedidoUpdated = await updateDetallePedido({detalles}, id);
        if (!detallePedidoUpdated) {
            return res.status(404).json({message: "Detalle de pedido no encontrado"});
        }
        res.status(200).json({message: "Detalle de pedido actualizado con éxito", payload: detallePedidoUpdated});
    } catch (error) {
        res.status(500).json({message: "Error interno del servidor", err: error.message});
    }
};