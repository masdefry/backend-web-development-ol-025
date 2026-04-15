import express, { NextFunction, Request, Response } from 'express';
import usersRouter from './routers/users.router';
import articlesRouter from './routers/articles.router';
import cors from 'cors';

const PORT: number = 8000;

const app = express();

app.use(express.json());

app.use(cors());

app.use('/api/auth', usersRouter);
app.use('/api/articles', articlesRouter);

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    success: false,
    message: error?.message,
    data: null,
  });
});

app.listen(PORT, () => {
  console.log(`[⚡SERVER] Running on port ${PORT}`);
});
