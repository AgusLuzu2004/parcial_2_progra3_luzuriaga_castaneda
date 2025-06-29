import conn from "../config/dbConfig.js";

const productoDao = {
  async getAll() {
    const selectQuery = "SELECT * FROM productos";
    console.log(await conn.query(selectQuery));

    const [rows] = await conn.query(selectQuery);
    return rows;
  }
 }

 export default productoDao;