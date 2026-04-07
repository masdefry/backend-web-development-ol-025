import { Request, Response } from 'express';
import pool from '../configs/pool-connection';

export const actorController = {
  async getAll(req: Request, res: Response) {
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
  },
  async create(req: Request, res: Response) {
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
  },
};
