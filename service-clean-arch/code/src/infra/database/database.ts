import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'service-mysql',
  user: 'root',
  database: 'clean_arch_db',
  port: 3306
})

export default connection;