import {pool} from '../database/phpMyAdmin.js'

export const visitorsData = async (req, res)=>{
    try{
        const userData = req.body;
        console.log(userData)
        // pool.getConnection((err, connection) => {
        //     if (err) {
        //       console.error('Error getting MySQL connection:', err);
        //       return;
        //     }
        //     connection.query(`INSERT INTO MyGuests (ip,	network, country_name, region, city, latitude, longitude, postav, visit_time) VALUES('${userData.ip}','${userData.network}','${userData.country_name}','${userData.region}','${userData.city}','${userData.latitude}','${userData.longitude}','${userData.postal}','${1}')`, (queryErr, results) => {
        //     connection.release(); 
          
        //       if (queryErr) {
        //         console.error('Error executing query:', queryErr);
        //         res.json({error: queryErr.message})
        //       } else {
        //         console.log('Query result:', results);
        //         res.json(results);
        //       }
        //     });
        // });
    }catch(err){
        console.error(err);
    }
}