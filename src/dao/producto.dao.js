import conn from "../config/dbConfig.js";

const UserDao = {
  async getAll() {
    const selectQuery = "SELECT * FROM productos";
    console.log(await conn.query(selectQuery));

    const [rows] = await conn.query(selectQuery);
    return rows;
  }
 }