import express from 'express';
import { PORT } from './config/constants';
import { userRouter } from './routes';

const app = express();
app.use(express.json());

app.use("/api/user", userRouter)

app.listen(PORT, () => {
    console.log(`
    ▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄ ▄▄▄▄▄▄   ▄▄   ▄▄ ▄▄▄▄▄▄▄ ▄▄▄▄▄▄         ▄▄▄ ▄▄▄▄▄▄▄       ▄▄   ▄▄ ▄▄▄▄▄▄▄    ▄▄ 
    █       █       █   ▄  █ █  █ █  █       █   ▄  █       █   █       █     █  █ █  █       █  █  █
    █  ▄▄▄▄▄█    ▄▄▄█  █ █ █ █  █▄█  █    ▄▄▄█  █ █ █       █   █  ▄▄▄▄▄█     █  █ █  █    ▄  █  █  █
    █ █▄▄▄▄▄█   █▄▄▄█   █▄▄█▄█       █   █▄▄▄█   █▄▄█▄      █   █ █▄▄▄▄▄      █  █▄█  █   █▄█ █  █  █
    █▄▄▄▄▄  █    ▄▄▄█    ▄▄  █       █    ▄▄▄█    ▄▄  █     █   █▄▄▄▄▄  █     █       █    ▄▄▄█  █▄▄█
     ▄▄▄▄▄█ █   █▄▄▄█   █  █ ██     ██   █▄▄▄█   █  █ █     █   █▄▄▄▄▄█ █     █       █   █       ▄▄ 
    █▄▄▄▄▄▄▄█▄▄▄▄▄▄▄█▄▄▄█  █▄█ █▄▄▄█ █▄▄▄▄▄▄▄█▄▄▄█  █▄█     █▄▄▄█▄▄▄▄▄▄▄█     █▄▄▄▄▄▄▄█▄▄▄█      █▄▄█`);
    console.log(``);
    console.log(`   connected to ${process.env.DATABASE}`);
    console.log(`   your url is: http://localhost:${PORT}`);
});