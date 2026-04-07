import express, { Request, Response } from 'express';
import pool from './configs/pool-connection';

const PORT: number = 8000;

const app = express();

app.use(express.json());

app.get('/api/actors', async (req: Request, res: Response) => {
  try {
    const { rows } = await pool.query(`select * from actor`);

    res.status(200).json({
      success: true,
      message: 'Get actors successfully',
      data: rows,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Get actors failed',
      data: null,
    });
  }
});

app.post('/api/actors', async (req: Request, res: Response) => {
  try {
    const { firstName, lastName } = req.body;

    await pool.query(
      'insert into actor(first_name, last_name) values($1, $2)',
      [firstName, lastName],
    );

    res.status(201).json({
      success: true,
      message: 'Create actor successfully',
      data: {
        firstName,
        lastName,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Get actors failed',
      data: null,
    });
  }
});

pool.connect((err, client, release) => {
  if (err) return console.error(`❌[DATABASE]: Database error: ${err?.stack}`);

  console.info(`✔️[DATABASE] Database is currently connected`);

  release();
});

app.listen(PORT, () => {
  console.log(`[⚡SERVER] Running on port ${PORT}`);
});
