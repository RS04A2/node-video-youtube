import { Request, Response } from 'express';
import { UserService } from './user.service';
//class to export user controller
export class UserController {
  //method to update api keys
  static async updateApiKeys(req: Request, res: Response) {

    //if no gemini_api, youtube_api or veo_api, return 400
    if (
      !req.body.gemini_api ||
      !req.body.youtube_api ||
      !req.body.veo_api
    ) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    //get api keys destructured
    const { gemini_api, youtube_api, veo_api } = req.body;
    //get user id = req.user.id not valid 
    const userId = (req.user as any).id;
    //try to update api keys
    try {
      await UserService.updateApiKeys(userId, { gemini_api, youtube_api, veo_api });
      return res.status(200).json({ message: 'API keys updated successfully' });
    } catch (err) {
      //return 500
      return res.status(500).json({ error: 'Failed to update API keys' });
    }
  }
}
