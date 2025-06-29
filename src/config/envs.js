import dotenv from "dotenv"

dotenv.config()
// Todo dato sensible lo colocamos aca 

console.log({
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME
});

export default{
    port: process.env.PORT,
    db_config: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password:process.env.DB_PASSWORD ,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT
    },
};


/*
PORT=5000
DB_USER = root
DB_PASSWORD = 21506005
DB_HOST = localhost
DB_NAME = autoservicio


*/ 