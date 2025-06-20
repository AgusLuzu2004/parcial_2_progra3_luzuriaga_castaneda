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
import {getPedidos, createPedidos, findPkPedidos, updatePedidos} from "../services/pedidos.service.js";
import {getDetallePedido, createDetallePedido, findPkDetallePedido, updateDetallePedido} from "../services/pedidos.service.js";

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
    // a completar
};

export const getAllDetallePedido = async (req, res) => {
    try {
        const pedidos = await getDetallePedido();
        res.status(200).json({message: "Lista de detalle de pedido", payload: pedidos});
    } catch (error) {
        res.status(500).json({message: "Error interno del servidor", err: error.message});
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
    // a completar
};

// export default { getAllPedidos };
// export default { getAllDetallePedido };