// src/routes/index.routes.ts
import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { UserRoutes } from '../modules/users/user.routes';
import { GeminiRoutes } from '../modules/gemini/gemini.routes';

//class to export routes
export class AppRoutes {
  //method to get routes
  static get routes(): Router {
    //create router
    const router = Router();
    //use auth routes
    router.use('/auth', AuthRoutes.routes);
    router.use('/user', UserRoutes.routes);
    router.use('/gemini', GeminiRoutes.routes);
    return router;
  }
}
