
import mysql, { ConnectionOptions } from 'mysql2';
import { envs } from '../config/envs';

//create connection to database
const access: ConnectionOptions = {
  host: envs.DB_HOST,
  user: envs.DB_USER,
  password: envs.DB_PASSWORD,
  database: envs.DB_NAME,
  port: envs.DB_PORT,
};
//export database connection
export const databaseConnection = mysql.createConnection(access);

//connect to database
databaseConnection.connect((err) => {
  if (err) {
    console.error('❌ Connection to database failed:', err.message);
  } else {
    console.log('✅ Connected to database successfully');
  }
}); 