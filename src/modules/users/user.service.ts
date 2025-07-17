import { databaseConnection } from '../../database/db';

//class to export user service  
export class UserService {
  //method to update api keys
  static updateApiKeys(userId: number, apis: { gemini_api: string, youtube_api: string, veo_api: string }) {
    //return promise
    return new Promise((resolve, reject) => {
      //create query
      const query = `
        UPDATE user_apis 
        SET gemini_api = ?, youtube_api = ?, veo_api = ?
        WHERE user_id = ?
      `;
      //get api keys destructured
      const { gemini_api, youtube_api, veo_api } = apis;
      //execute query
      databaseConnection.query(query, [gemini_api, youtube_api, veo_api, userId], (err, result) => {
        //if error, return error
        if (err) return reject(err);
        //return result 
        resolve(result);
      });
    });
  }
}
