// QUEDA DE MUESTRA EN CASO DE HACER UNA CONEXION SIN UN ORM



// import mysql from "mysql2/promise"
// import envs from './envs.js'

// const {host,user,password,database} = envs.db_config

// const pool = mysql.createPool({
//   host: host,
//   user: user,
//   password:password ,
//   database: database,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// }); 



// const connection = await pool.getConnection();

// try{
//   connection.release();
//   console.log('Te conectaste a la base de datos con exito')
// } catch (err){
//   console.log(err);
// }

// export default connection;
