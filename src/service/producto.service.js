import productos from "../models/producto.models.js"

export const getProductos = async()=>{
    return await productos.findAll(); //equivalente a select * from productos
};

export const create = async(producto) =>{
    return await productos.create(producto); // Equivalente a inser into productos
};

export const update = async(producto,id) =>{
    return await productos.update(producto, {
    where: { id: id }
  });
};

export const desactivate = async (id) => {
  return await productos.update(
    { activo: false },
    { where: { id: id } }
  );
};