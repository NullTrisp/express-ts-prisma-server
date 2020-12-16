import { user } from '@prisma/client';
import { Request, response, Response } from 'express';
import { CrudController } from '../../classes/CrudController';
import { prisma } from '../../config/constants';

export class UserController extends CrudController {
    public create(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        this.createUser(req.body).then(response => {
            res.sendStatus(201);
        }).catch(err => {
            throw err;
        }).finally(async () => {
            await prisma.$disconnect()
        })
    }

    private async createUser(data: any): Promise<user> {
        return await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
            }
        })
    }

    public read(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        this.getAll().then(response => {
            res.status(200).send(response);
        }).catch(e => {
            throw e;
        }).finally(async () => {
            await prisma.$disconnect();
        })
    }

    private async getAll(): Promise<Array<user>> {
        return await prisma.user.findMany();
    }

    readOne(req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs>, res: Response<any>) {
        this.getOne(Number(req.params.userid)).then(response => {
            if (response !== null) {
                res.status(200).send(response);
            } else {
                res.status(404).send("user not found");
            }
        }).catch(err => {
            throw err;
        }).finally(async () => {
            await prisma.$disconnect();
        })
    }

    private async getOne(userid: number): Promise<user | null> {
        return await prisma.user.findUnique({
            where: {
                id: userid
            }
        })
    }

    public update(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        this.updateOne(Number(req.params.userid), req.body.name).then(response => {
            res.status(200).send(response);
        }).catch(err => {
            throw err;
        }).finally(async () => {
            await prisma.$disconnect();
        })
    }

    private async updateOne(userid: number, newName: string): Promise<user> {
        return await prisma.user.update({
            where: {
                id: userid,
            },
            data: {
                name: newName,
            },
        })
    }

    public delete(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Method not implemented.");
    }
}