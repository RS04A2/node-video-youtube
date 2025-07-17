import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { envs } from '../config/envs';
import { JwtPayload } from 'jsonwebtoken';

//declare global namespace Express
declare global {
    namespace Express {
      interface Request {
        user?: string | JwtPayload;
      }
    }
  }

//function to validate jwt
export function validateJWT(req: Request, res: Response, next: NextFunction) {
    //get auth header
  const authHeader = req.headers.authorization;
  //if no auth header, return 401
  if (!authHeader) {
    return res.status(401).json({ error: 'No token provided' });
  }
  //get token
  const token = authHeader.split(' ')[1]; 
  //try to verify token
  try {
    const decoded = jwt.verify(token, envs.JWT_SECRET as string);
    req.user = decoded;
    
    
    //next middleware
    next();
  } catch (err) {
    //if token is invalid, return 403
    return res.status(403).json({ error: 'Invalid or expired token' });
  }
}