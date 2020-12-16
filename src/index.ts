import express from 'express';
import { PORT } from './config/constants';
import { exampleRouter } from './routes';

const app = express();
app.use(express.json());

app.use("/example", exampleRouter)

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
    console.log(`   your url is: http://localhost:${PORT}`);
});