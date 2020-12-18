import express, { Request, Response } from 'express';
import { authenticateToken } from '../../config/jwt/services';
import { userController } from '../../controllers';

export const router = express.Router({
    strict: true
});

router.post('/', (req: Request, res: Response) => {
    userController.create(req, res);
});

router.post('/login', (req: Request, res: Response) => {
    userController.login(req, res);
});

router.get('/', authenticateToken, (req: Request, res: Response) => {
    userController.read(req, res);
});

router.get('/:userid', (req: Request, res: Response) => {
    userController.readOne(req, res);
});

router.put('/', authenticateToken, (req: Request, res: Response) => {
    userController.update(req, res);
});

router.delete('/', authenticateToken, (req: Request, res: Response) => {
    userController.delete(req, res);
});