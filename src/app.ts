import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/route';

const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// Application Routes
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
