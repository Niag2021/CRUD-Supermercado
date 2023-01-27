import {Router} from 'express'; 
import {pool} from '../db/db.js'; 

//se crea enrutador
const router = Router();
    router.get("/estado", async(req, res) => {
        const [rows] = await pool.query("SELECT 1 as Conectado");
        console.log(rows[0]); 
        res.json(rows[0]); 
    });
    
export default router;