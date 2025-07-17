import { Router } from 'express';
import { GeminiController } from './gemini.controller';
import { validateJWT } from '../../middlewares/validate-jwt';

//class to export auth routes
export class GeminiRoutes {
  //method to get routes
  static get routes(): Router {
    //create router
    const router = Router();
    
    //post generate route
    router.post('/generateText', validateJWT, GeminiController.generate);
   
    return router;
  }
}
