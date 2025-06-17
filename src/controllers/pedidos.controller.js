import pedidoDao from "../dao/pedidos.dao.js";
import detallePedidoDao from "../dao/pedidos.dao.js";

const pedidosController = {
  async guardar(req, res) {
    try {
      const { cliente, total } = req.body;
      if (!cliente || !total) {
        return res.status(400).json({ error: "Faltan datos del pedido" });
      }
      const id = await pedidoDao.guardar({ cliente, total });
      res.status(201).json({ id });
    } catch (error) {
      console.error("Error al guardar el pedido:", error);
      res.status(500).json({ error: "Error en la base de datos" });
    }
  }
};

const pedidoDetalleController = {
  async guardarDetalle(req, res) {
    try {
      const detalle = req.body; // Esperamos que el body tenga: pedido_id, producto_id, cantidad, precio_unitario, subtotal

      if (!detalle.pedido_id || !detalle.producto_id || !detalle.cantidad || !detalle.precio_unitario || !detalle.subtotal) {
        return res.status(400).json({ error: 'Faltan datos para guardar detalle de pedido' });
      }

      const resultado = await detallePedidoDao.guardarDetalle(detalle);
      res.status(201).json({ message: 'Detalle de pedido guardado', id: resultado.insertId });
    } catch (error) {
      console.error('Error guardando detalle de pedido:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
};

export  {
  pedidosController,
  pedidoDetalleController
};