import {getProductos,desactivate,create,update} from "../service/producto.service.js"

export const getAllProductos= async (req,res)=>{
    try {
        const productos = await getProductos()
        res.status(200).json({message:"Lista de pedidos",payload: productos})
    } catch (error) {
        res.status(500).json({message:"Error interno del servidor",err: error.message});
    }
}

export const createProducto = async(req,res) => {
    try {
        const {sku, nombre, activo, precio_normal, categoria, imagen} =req.body
        const newProducto = await create({sku, nombre, activo, precio_normal, categoria, imagen})
        res.status(201).json({message:"Producto creado con exito",payload: newProducto})
    } catch (error) {
         res.status(500).json({message:"Error interno del servidor",err: error.message});
    }
}

export const updateProducto= async(req,res) =>{
  const { id } = req.params;
  const producto = req.body;

  try {
    const resultado = await update(producto, id);

    // resultado = [número de filas actualizadas], o un objeto si usás `returning: true`
    if (resultado[0] === 0) {
      return res.status(404).json({ message: "producto no encontrado o sin cambios" });
    }

    res.status(200).json({ message: "producto actualizado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const deleteLogical = async (req, res) => {
  const { id } = req.params;

  try {
    const resultado = await desactivate(id);

    // resultado = cantidad de filas afectadas
    if (resultado === 0) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.status(200).json({ message: "Producto desactivado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};