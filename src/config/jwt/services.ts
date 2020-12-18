import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../constants';

// this function is used to authenticate any bearer token recieved in headers
export function authenticateToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, TOKEN_SECRET as string, (err: any) => {
        if (err) return res.sendStatus(403);
        next();
    })
}

// this functions allows you to generate any token
export function generateAccessToken(data: object) {
    return jwt.sign(data, TOKEN_SECRET);   //you can add jwt options here
}