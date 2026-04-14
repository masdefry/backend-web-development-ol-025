import { Request, Response } from 'express';
import { usersService } from '../services/users.service';

export const usersController = {
  async login() {},
  async register(req: Request, res: Response) {
    const { email, password, fullName } = req?.body;

    await usersService?.register({ email, password, fullName });

    res.status(201).json({
      success: true,
      message: 'Register user successful',
      data: {
        email,
        fullName,
      },
    });
  },
};
