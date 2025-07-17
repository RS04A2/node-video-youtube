import { Server } from './app'; 
import { envs } from './config/envs';
import { AppRoutes } from './routes/index';

//create server instance
const server = new Server({
  port: envs.PORT,
  routes: AppRoutes.routes,
  corsOrigin: envs.CORS_ORIGIN,
});

//start server
server.listen();