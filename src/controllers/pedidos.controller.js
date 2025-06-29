import {getPedidos,create,findPk,update} from "../service/pedidos.service.js"

export const getAllPedidos = async (req,res)=>{
  try {
    const pedidos = await getPedidos()

    res.status(200).json({message:"Lista de pedidos",payload: pedidos})

  } catch (error) {
    res.status(500).json({message:"Error interno del servidor",err: error.message});
  }
}

export const createPedido = async (req,res) =>{
  try {
    const {cliente,total} = req.body

    //validacion sencilla if (!cliente || !total || total === 0 ) return res.status(400).json({message: "Campos invalidos"})
    const newPedido = await create({cliente,total})
    res.status(201).json({message:"Pedido creado con exito",payload: newPedido})

  } catch (error) {
    res.status(500).json({message:"Error interno del servidor",err: error.message});
  }
}


export const findPedido = async(req,res)=>{
  try {
    const {id} = req.params;
    const pedidoFound = await findPk(id);
    res.status(200).json({message:"Pedido encontrado", payload: pedidoFound })
  } catch (error) {
    res.status(400).json({message:"Error interno del servidor en findPedido",err:error.message})
  }
}

export const updatePedido= async(req,res) =>{
  const { id } = req.params;
  const pedido = req.body;

  try {
    const resultado = await update(pedido, id);

    // resultado = [número de filas actualizadas], o un objeto si usás `returning: true`
    if (resultado[0] === 0) {
      return res.status(404).json({ message: "Pedido no encontrado o sin cambios" });
    }

    res.status(200).json({ message: "Pedido actualizado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// const pedidosController = {
//   async guardar(req, res) {
//     try {
//       const { cliente, total } = req.body;
//       if (!cliente || !total) {
//         return res.status(400).json({ error: "Faltan datos del pedido" });
//       }
//       const id = await pedidoDao.guardar({ cliente, total });
//       res.status(201).json({ id,cliente,total });
//     } catch (error) {
//       console.error("Error al guardar el pedido:", error);
//       res.status(500).json({ error: "Error en la base de datos" });
//     }
//   }
// };

// const pedidoDetalleController = {
//   async guardarDetalle(req, res) {
//   try {
//     const detalles = req.body; // Esperamos un array de objetos

//     if (!Array.isArray(detalles) || !detalles.length) {
//       return res.status(400).json({ error: 'Se espera un array de detalles' });
//     }

//     const resultado = await pedidoDao.guardarDetalle(detalles);
//     res.status(201).json({ message: 'Detalle de pedido guardado', id: resultado.insertId });
//   } catch (error) {
//     console.error('Error guardando detalle de pedido:', error);
//     res.status(500).json({ error: 'Error interno del servidor' });
//   }
// }
// };

// export  {
//   pedidosController,
//   pedidoDetalleController
// };