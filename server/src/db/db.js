import {Sequelize} from 'sequelize';

const db = new Sequelize('supermercado','root','05102142',{
    host: 'localhost', 
    dialect: 'mysql'
}); 

export default db; 

