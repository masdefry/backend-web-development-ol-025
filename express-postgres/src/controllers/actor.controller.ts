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
        message: 'Create actor failed',
        data: null,
      });
    }
  },
  async update(req: Request, res: Response) {
    try {
      const { firstName, lastName } = req?.body;
      const { id } = req?.params;

      await pool.query(
        'update actor set first_name=$1, last_name=$2 where actor_id=$3',
        [firstName, lastName, id],
      );

      res.status(200).json({
        success: true,
        message: `Update actor with id=${id} successfull`,
        data: {
          firstName,
          lastName,
        },
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: `Update actor failed`,
        data: null,
      });
    }
  },
  async delete(req: Request, res: Response) {
    try {
      const { id } = req?.params;

      await pool.query('delete from actor where actor_id=$1', [id]);

      res.status(200).json({
        success: true,
        message: `Delete actor with id=${id} successfull`,
        data: {},
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: `Delete actor failed`,
        data: null,
      });
    }
  },
};
