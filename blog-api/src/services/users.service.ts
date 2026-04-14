import { User } from '../../generated/prisma/client';
import { prisma } from '../configs/prisma-client.config';

export const usersService = {
  async login({ email, password }: Pick<User, 'email' | 'password'>) {
    const findUserByEmailAndPassword = await prisma.user.findUnique({
      where: {
        email,
        password,
      },
    });

    if(!findUserByEmailAndPassword) throw new Error('Invalid credential user account');

    return {
      email: findUserByEmailAndPassword?.email, 
      fullName: findUserByEmailAndPassword?.fullName
    }
  },
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
