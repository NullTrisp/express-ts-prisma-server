import express from 'express';
import cors from 'cors';
import { CORSMSG, DATABASE, HOST, ORIGINS, PORT } from './config/constants';
import { userRouter } from './routes';

class Server {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    private routes(): void {
        this.app.use("/api/user", userRouter)
    }
    private config(): void {
        this.app.use(express.json());
        this.app.use(cors({
            origin: (origin, callback) => {
                if (!origin) return callback(null, true);
                if (ORIGINS.indexOf(origin) === -1) {
                    return callback(new Error(CORSMSG), false);
                }
                return callback(null, true);
            }
        }));
    }

    public start(): void {
        this.app.listen(PORT, () => {
            console.log(`
    ▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄ ▄▄▄▄▄▄   ▄▄   ▄▄ ▄▄▄▄▄▄▄ ▄▄▄▄▄▄         ▄▄▄ ▄▄▄▄▄▄▄       ▄▄   ▄▄ ▄▄▄▄▄▄▄    ▄▄ 
    █       █       █   ▄  █ █  █ █  █       █   ▄  █       █   █       █     █  █ █  █       █  █  █
    █  ▄▄▄▄▄█    ▄▄▄█  █ █ █ █  █▄█  █    ▄▄▄█  █ █ █       █   █  ▄▄▄▄▄█     █  █ █  █    ▄  █  █  █
    █ █▄▄▄▄▄█   █▄▄▄█   █▄▄█▄█       █   █▄▄▄█   █▄▄█▄      █   █ █▄▄▄▄▄      █  █▄█  █   █▄█ █  █  █
    █▄▄▄▄▄  █    ▄▄▄█    ▄▄  █       █    ▄▄▄█    ▄▄  █     █   █▄▄▄▄▄  █     █       █    ▄▄▄█  █▄▄█
     ▄▄▄▄▄█ █   █▄▄▄█   █  █ ██     ██   █▄▄▄█   █  █ █     █   █▄▄▄▄▄█ █     █       █   █       ▄▄ 
    █▄▄▄▄▄▄▄█▄▄▄▄▄▄▄█▄▄▄█  █▄█ █▄▄▄█ █▄▄▄▄▄▄▄█▄▄▄█  █▄█     █▄▄▄█▄▄▄▄▄▄▄█     █▄▄▄▄▄▄▄█▄▄▄█      █▄▄█`);
            console.log(``);
            console.log(`   connected to ${DATABASE}`);
            console.log(`   your url is: ${HOST}:${PORT}`);
        });
    }
}

const server = new Server();

server.start();