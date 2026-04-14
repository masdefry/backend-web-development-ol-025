import express, { NextFunction, Request, Response } from 'express';

const PORT: number = 8000;

const app = express();

app.use(express.json());

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
