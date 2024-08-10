import mysql from 'mysql'

export const pool = mysql.createPool({
    connectionLimit: 10, // Limit the maximum number of connections in the pool
    host: "brceq7jeney4qbqszgnf-mysql.services.clever-cloud.com",
    user: "uwq3twupeew20d2i",
    password: "SRoJDNWNfvidHN4enUzc",
    database: "brceq7jeney4qbqszgnf",
  });
  
