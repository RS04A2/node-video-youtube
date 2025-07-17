import { Request, Response } from 'express';
import { GeminiService } from './gemini.service';

// GeminiController class to generate text for user
export class GeminiController {
  //method to generate text for user
  static async generate(req: Request, res: Response) {

    //check content of request body is not empty prompt
    if(!req.body.prompt){
      return res.status(400).json({message: "Prompt is required"});
    }

    //get prompt from request body
    const { prompt } = req.body;
    //get user id from request user
    const userId = (req.user as any).id;
  
    //try to generate text for user
    try {
      const result = await GeminiService.generateTextForUser(userId, prompt);
      //if gemini api key is not found, return error
      if(result === "No Gemini API key found"){
        return res.status(404).json({message: "Gemini API key not found"});
      }
      //if error generating content, return error
      if(result === 'error'){
        return res.status(500).json({message: "Error generating content"});
      }
      //return success message and result
      return res.status(200).json({message: "success", result});
     
    } catch (err) {
      console.error('❌ Gemini error:', err);
      return res.status(500).json({ error: 'Error generating content'  });
    }
  }
}
