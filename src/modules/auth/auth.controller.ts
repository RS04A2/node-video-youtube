import jwt from 'jsonwebtoken';
import { envs } from '../../config/envs';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';

//class to export auth controller
export class AuthController {
    //method to login
    static async login(req: Request, res: Response) {
        const { username, password } = req.body;
        //if no username or password, return 400
        if (!username || !password) {
            return res.status(400).json({ error: 'Missing credentials' });
        }
        //try to login
        try {
            //get user
            const user = await AuthService.login(username, password);
            //if no user, return 401
            if (!user) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }
            //generate token
            const token = jwt.sign(
                { id: user.id, username: user.username },
                envs.JWT_SECRET as string,
                { expiresIn: '1h' }
            );
            //return user secured
            const userSecured = {
                id: user.id,
                username: user.username,
                token: token,
            };
            //return user secured
            return res.status(200).json({ message: 'Login successful', userSecured });
        } catch (error) {
            
            console.error(error);
            //return 500 error
            return res.status(500).json({ error: 'Internal server error' });
        }
    }
}
