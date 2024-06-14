import mongoose from 'mongoose';
import { TUser } from './user.interface';
import { User } from './user.model';

import QueryBuilder from '../../builder/QueryBuilder';
import { userSearchableFields } from './user.const';

// Create user
const createUserInDB = async (userData: TUser) => {
  try {
    const newUser = await User.create(userData);

    return newUser;
  } catch (err: any) {
    throw new Error(err);
  }
};

// get all users
const getAllUsersFromDB = async (query: Record<string, unknown>) => {
  const userQuery = new QueryBuilder(User.find(), query)
    .search(userSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await userQuery.modelQuery;
  return result;
};

export const UserServices = {
  createUserInDB,
  getAllUsersFromDB,
};
