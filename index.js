import express from 'express'
import cors from 'cors'
import axios from 'axios'
import {pool} from './database/phpMyAdmin.js'

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
app.post('/test', async (req, res)=>{
    try{
        const userData = req.body;
        console.log('connected', req.body)
        pool.getConnection((err, connection) => {
            if (err) {
              console.error('Error getting MySQL connection:', err);
              return;
            }
            connection.query(`INSERT INTO testdb (name,gender) VALUES('${userData.name}','${userData.gender}')`, (queryErr, results) => {
            connection.release(); 
          
              if (queryErr) {
                console.error('Error executing query:', queryErr);
                res.json({error: queryErr.message})
              } else {
                console.log('Query result:', results);
                res.json(results);
              }
            });
        });
    }catch(err){
        console.error(err);
    }
})

app.listen(port, ()=>{
    console.log("Server running on port -> ", port);
})