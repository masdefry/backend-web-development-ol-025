import express from 'express';
import branchesRouter from './routers/branches.router';

const PORT: number = 8000;

const app = express();

app.use(express.json());

app.use('/api/branches', branchesRouter);

app.listen(PORT, () => {
  console.log(`[⚡SERVER] Running on port ${PORT}`);
});
