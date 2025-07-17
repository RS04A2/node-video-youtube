// auth.service.ts
import { databaseConnection } from '../../database/db';

//class to export auth service
export class AuthService {
  //method to login
  static login(username: string, password: string): Promise<any | null> {
    return new Promise((resolve, reject) => {
      //create query
      const query = `SELECT * FROM users WHERE username = ? AND password = ?`;
      //execute query
      databaseConnection.query(query, [username, password], (err: any, results:any) => {
        //if error, return error
        if (err) {
          console.log('Error executing query:', err);
          //return error
          return reject(err);
          
        }
        //get user
        const user = results[0];
       
        
        //return user
        resolve(user || null);
      });
    });
  }
}
