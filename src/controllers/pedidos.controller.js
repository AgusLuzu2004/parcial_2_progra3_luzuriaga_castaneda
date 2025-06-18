import pedidoDao from "../dao/pedidos.dao.js";


const pedidosController = {
  async guardar(req, res) {
    try {
      const { cliente, total } = req.body;
      if (!cliente || !total) {
        return res.status(400).json({ error: "Faltan datos del pedido" });
      }
      const id = await pedidoDao.guardar({ cliente, total });
      res.status(201).json({ id,cliente,total });
    } catch (error) {
      console.error("Error al guardar el pedido:", error);
      res.status(500).json({ error: "Error en la base de datos" });
    }
  }
};

const pedidoDetalleController = {
  async guardarDetalle(req, res) {
  try {
    const detalles = req.body; // Esperamos un array de objetos

    if (!Array.isArray(detalles) || !detalles.length) {
      return res.status(400).json({ error: 'Se espera un array de detalles' });
    }

    const resultado = await pedidoDao.guardarDetalle(detalles);
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