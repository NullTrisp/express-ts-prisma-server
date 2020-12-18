import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../constants';

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, TOKEN_SECRET as string, (err: any) => {
        if (err) return res.sendStatus(403);
        next();
    })
}

export function generateAccessToken(email: object) {
    return jwt.sign(email, TOKEN_SECRET);   //you can add jwt options here
}