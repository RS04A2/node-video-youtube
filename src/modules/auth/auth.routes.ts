import { Router } from 'express';
import { AuthController } from './auth.controller';
import { validateJWT } from '../../middlewares/validate-jwt';

//class to export auth routes
export class AuthRoutes {
  //method to get routes
  static get routes(): Router {
    //create router
    const router = Router();
    
    //post login route
    router.post('/login', AuthController.login);

    //get validate token route
    //validate token middleware
    router.get('/validate', validateJWT, (req, res) => {
      res.status(200).json({ message: '✅ validate token', user: req.user });
    });
    return router;
  }
}
