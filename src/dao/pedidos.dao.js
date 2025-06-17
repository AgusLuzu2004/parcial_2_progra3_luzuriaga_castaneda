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

const guardarDetalle  = async (detalles) => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS detalle_pedido (
      id INT AUTO_INCREMENT PRIMARY KEY,
      pedido_id INT,
      producto_id INT,
      cantidad INT,
      precio_unitario DECIMAL(10,2),
      subtotal DECIMAL(10,2),
      imagen VARCHAR(255),
      FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
      FOREIGN KEY (producto_id) REFERENCES productos(id)
    )
  `;

  const insertQuery = `
    INSERT INTO detalle_pedido
    (pedido_id, producto_id, cantidad, precio_unitario, subtotal, imagen)
    VALUES ?
  `;

  // detalles es un array de objetos
  const values = detalles.map(item => [
    item.pedido_id,
    item.producto_id,
    item.cantidad,
    item.precio_unitario,
    item.subtotal,
    item.fecha || new Date(), // por si no se incluye desde el front
    item.imagen
  ]);

  try {
    await conn.promise().query(createTableQuery);
    const [result] = await conn.promise().query(insertQuery, [values]);
    return result;
  } catch (error) {
    throw error;
  }
};





export default { guardar,guardarDetalle };
