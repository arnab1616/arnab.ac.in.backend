import {pool} from '../database/phpMyAdmin.js'

export const test = async (req, res)=>{
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
}