import { Request, response, Response } from 'express';
import { CrudController } from '../../classes/CrudController';
import { PRISMA } from '../../config/constants';
import { generateAccessToken } from '../../config/jwt/services';

export class UserController extends CrudController {
    public create(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        PRISMA.user.create({
            data: {
                name: req.body.name,
                email: req.body.email,
            }
        }).then(_response => {
            res.sendStatus(201);
        }).catch(err => {
            res.status(500).send(err);
        }).finally(async () => {
            await PRISMA.$disconnect()
        })
    }

    public login(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        PRISMA.user.findUnique({
            where: {
                email: <string>req.body.email,
            }
        }).then(response => {
            if (response !== null) {
                res.json(generateAccessToken({ email: response.email }));
            } else {
                res.status(400).send("Credentials not found");
            }
        }).catch(err => {
            console.log(err)
            res.status(500).send(err);
        })
    }

    public read(_req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        PRISMA.user.findMany().then(response => {
            res.status(200).send(response);
        }).catch(err => {
            res.status(500).send(err);
        }).finally(async () => {
            await PRISMA.$disconnect();
        })
    }

    public readOne(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response<any>) {
        PRISMA.user.findUnique({
            where: {
                id: Number(req.params.userid),
            }
        }).then(response => {
            if (response !== null) {
                res.status(200).send(response);
            } else {
                res.status(404).send("user not found");
            }
        }).catch(err => {
            res.status(500).send(err);
        }).finally(async () => {
            await PRISMA.$disconnect();
        })
    }

    public update(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        PRISMA.user.update({
            where: {
                email: <string>req.body.name,
            },
            data: {
                name: req.body.name,
            },
        }).then(response => {
            res.status(200).send(response);
        }).catch(err => {
            res.status(500).send(err);
        }).finally(async () => {
            await PRISMA.$disconnect();
        })
    }

    public delete(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        PRISMA.user.delete({
            where: {
                email: <string>req.body.email,
            }
        }).then(response => {
            res.status(200).send(response);
        }).catch(err => {
            res.status(500).send(err);
        }).finally(async () => {
            await PRISMA.$disconnect();
        })
    }
}