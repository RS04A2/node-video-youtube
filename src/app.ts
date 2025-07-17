import express, { Application, Router } from 'express';
import cors from 'cors';

//interfacer for server options
interface ServerOptions {
  port: number;
  routes: Router;
  corsOrigin: string;
}

//class for server configuration express
export class Server {
  //properties for server configuration 
  //use readonly to avoid changes in the properties
  readonly app: Application;
  readonly port: number;
  readonly routes: Router;

  //constructor for server configuration
  constructor(options: ServerOptions) {
    //destructure options
    const { port, routes, corsOrigin } = options;
    //initialize express app
    this.app = express(); 
    //set port
    this.port = port;
    //set routes
    this.routes = routes;

    //apply cors middleware for allow requests from other domains
    this.app.use(
      cors({
        origin: corsOrigin,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
      })
    );

    //apply json middleware for parsing json body
    this.app.use(express.json());

    //apply routes /api/*
    this.app.use('/api', this.routes);
  }
  //method for run server
  listen() {
    this.app.listen(this.port, () => {
      console.log(`🚀 Server running on http://localhost:${this.port}`);
    });
  }
}
