import { Sequelize } from "sequelize";
import envs from './envs.js'
const {host,user,password,database,port} = envs.db_config

const sequelize = new Sequelize(database,user,password,{
    host: host,
    dialect: "mysql",
    port: port,
});

try {
    await sequelize.authenticate()
    console.log("Base de datos conectada desde sequelize")
} catch (error) {
    console.log(error)
}

export default sequelize;