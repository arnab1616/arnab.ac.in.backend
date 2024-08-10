import {pool} from '../database/phpMyAdmin.js'

export const visitorsMessage = async (req, res)=>{
    try{
        const userData = req.body;
        console.log(userData)
        pool.getConnection((err, connection) => {
            if (err) {
              console.error('Error getting MySQL connection:', err);
              return;
            }
            connection.query(`INSERT INTO messages (name, user_email, subject, messaage, time) VALUES('${userData.name}','${userData.user_email}','${userData.subject}','${userData.message}','${new Date()}')`, (queryErr, results) => {
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
        res.status(500).json(err);
    }
}