import { User } from '../../generated/prisma/client';
import { prisma } from '../configs/prisma-client.config';

export const usersService = {
  async login() {},
  async register({
    email,
    password,
    fullName,
  }: Pick<User, 'fullName' | 'email' | 'password'>) {
    await prisma.user.create({
      data: {
        email,
        password,
        fullName,
      },
    });
  },
};
