<<<<<<< HEAD
import {Sequelize} from "sequelize";
import envs from "./envs.js";
const {host, user, password, database, port} = envs.db_config;
const sequelize = new Sequelize(database, user, password, {
=======
import { Sequelize } from "sequelize";
import envs from './envs.js'
const {host,user,password,database,port} = envs.db_config

const sequelize = new Sequelize(database,user,password,{
>>>>>>> Retomando
    host: host,
    dialect: "mysql",
    port: port,
});

try {
<<<<<<< HEAD
    await sequelize.authenticate();
    console.log("Database is connected with SEQUELIZE");
} catch (error) {
    console.error(error);
=======
    await sequelize.authenticate()
    console.log("Base de datos conectada desde sequelize")
} catch (error) {
    console.log(error)
>>>>>>> Retomando
}

export default sequelize;