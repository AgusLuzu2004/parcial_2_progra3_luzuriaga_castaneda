import express from "express";
import mysql from "mysql2/promise";

const app = express();
const PORT = 3001;

app.use(express.json());

const dbConexion = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "21506005",
  database: "users",
});

console.log("Conexion creada con éxito");

export default dbConexion;
