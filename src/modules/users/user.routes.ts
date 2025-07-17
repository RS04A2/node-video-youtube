import { Router } from 'express';
import { UserController } from './user.controller';
import { validateJWT } from '../../middlewares/validate-jwt';

//class to export user routes
export class UserRoutes {
  //method to get routes
  static get routes(): Router {
    const router = Router();
    //put update apis route
    router.put('/update-apis', validateJWT, UserController.updateApiKeys);
    //return router
    return router;
  }
}
