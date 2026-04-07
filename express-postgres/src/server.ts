import express, { Request, Response } from 'express';
import pool from './configs/pool-connection';
import actorRouter from './routers/actor.router';

const PORT: number = 8000;

const app = express();

app.use(express.json());

app.use('/api/actors', actorRouter);

pool.connect((err, client, release) => {
  if (err) return console.error(`❌[DATABASE]: Database error: ${err?.stack}`);

  console.info(`✔️[DATABASE] Database is currently connected`);

  release();
});

app.listen(PORT, () => {
  console.log(`[⚡SERVER] Running on port ${PORT}`);
});



// Routing      > Route API
// Controller   > Handle request & response
// Services     > Handle business logic
// Repository   > Handle communicate database