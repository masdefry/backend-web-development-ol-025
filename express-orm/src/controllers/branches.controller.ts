import { Request, Response } from 'express';
import { prisma } from '../configs/prisma-client.config';

export const branchesController = {
  async getAll(req: Request, res: Response) {
    const branches = await prisma.branch.findMany();

    res.status(200).json({
      success: true,
      message: 'Get branches successful',
      data: branches,
    });
  },
  async create(req: Request, res: Response) {
    const { name, address, phoneNumber } = req?.body;

    await prisma.branch.create({
      data: {
        name,
        address,
        phoneNumber,
      },
    });

    res.status(201).json({
      success: true,
      message: 'Create branch successful',
      data: {
        name,
        address,
        phoneNumber,
      },
    });
  },
};
