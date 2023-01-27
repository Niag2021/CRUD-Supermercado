import {Sequelize} from 'sequelize';
//sequelize

const db = new Sequelize('libreria','root','05102142',{
    host: 'localhost', 
    dialect: 'mysql'
}); 

export default db; 

/*
import { createPool } from 'mysql2/promise'; 

export const pool = new createPool({
    host: 'localhost', 
    port: 3306, 
    user: 'root', 
    password: '05102142', 
    database: 'supermercado'
});
*/