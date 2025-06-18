import conn from "../config/dbConfig.js";

const guardar = async ({ cliente, total }) => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS pedidos (
      id INT AUTO_INCREMENT PRIMARY KEY,
      cliente VARCHAR(255),
      fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
      total DECIMAL(10,2)
    )
  `;

  const insertQuery = `INSERT INTO pedidos (cliente, total) VALUES (?, ?)`;

  // Ejecutar creación tabla sin callback
  await conn.query(createTableQuery);

  // Ejecutar inserción y devolver id insertado
  const [result] = await conn.query(insertQuery, [cliente, total]);

  return result.insertId;
};

export const guardarDetalle = async (detalles) => {
  const insertQuery = `
    INSERT INTO detalle_pedido
    (pedido_id, producto_id, nombre_producto, imagen_producto, precio_unitario, cantidad, subtotal)
    VALUES ?
  `;

  // Asegúrate que detalles sea un array de objetos
  const values = detalles.map(item => [
    item.pedido_id,
    item.producto_id,
    item.nombre_producto,
    item.imagen_producto,
    item.precio_unitario,
    item.cantidad,
    item.subtotal
  ]);

  try {
    // Aquí quitamos el .promise() porque conn ya es conexión con promesas
    const [result] = await conn.query(insertQuery, [values]);
    return result;
  } catch (error) {
    throw error;
  }
};

export default { guardar, guardarDetalle };

