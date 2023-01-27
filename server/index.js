import express from "express";
import colors from "colors";
import db from "./src/db/db.js";
import cors from 'cors';

const app = express(); 

app.use(cors())
app.use(express.json())

try{
    await db.authenticate()
    console.log('Conexion exitosa a la BD.'.black.bgGreen);
}catch(error){
    console.log('El error de conexion es : $(error)'.yellow.bgRed);
}

app.listen(3001, () =>{
    console.log("Servidor ejecutandose en el puerto 3001.".black.bgGreen);
})
