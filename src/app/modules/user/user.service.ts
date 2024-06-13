import mongoose from 'mongoose';
import { TUser } from './user.interface';
import { User } from './user.model';

const createUserInDB = async (userData: TUser) => {
  try {
    const newUser = await User.create(userData);

    //   create a student
    // if (!newUser.userData) {
    //   throw new Error('Failed to create user');
    // }

    return newUser;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const UserServices = {
  createUserInDB,
};
