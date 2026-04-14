import { Request, Response } from 'express';
import { usersService } from '../services/users.service';

export const usersController = {
  async login(req: Request, res: Response) {
    const { email, password } = req?.body;

    const loginWithoutPassword = await usersService?.login({ email, password });

    res.status(200).json({
      success: true,
      message: 'Authentication user successful',
      data: {
        ...loginWithoutPassword,
      },
    });
  },
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
