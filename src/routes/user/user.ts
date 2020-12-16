import express, { Request, Response } from 'express';
import { userController } from '../../controllers';

export const router = express.Router({
    strict: true
});

router.post('/', (req: Request, res: Response) => {
    userController.create(req, res);
});

router.get('/', (req: Request, res: Response) => {
    userController.read(req, res);
});

router.get('/:userid', (req: Request, res: Response) => {
    userController.readOne(req, res);
});

router.put('/:userid', (req: Request, res: Response) => {
    userController.update(req, res);
});

router.delete('/:userid', (req: Request, res: Response) => {
    userController.delete(req, res);
});