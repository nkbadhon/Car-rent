import httpStatus from 'http-status';
import AppError from '../../Errors/AppError';
import { User } from '../user/user.model';
import { TSignIn } from './auth.interface';
import config from '../../config';
import jwt from 'jsonwebtoken';

const signInUser = async (payload: TSignIn) => {
  const _id = payload?.id;
  const password = payload?.password;
  // if the user is exist
  const user = await User.isUserExist(_id);
  console.log(user.phone);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User Not found');
  }

  // checking if the user deleted or not
  const isDeleted = user.isDeleted;
  if (isDeleted) {
    throw new AppError(httpStatus.NOT_FOUND, 'User deleted');
  }

  // Checking the password is correct
  if (!(await User.isPasswordMatched(password, user?.password))) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password wrong');
  }
  // creating token
  const jwtPayload = {
    phone: user.phone,
    role: user.role,
  };

  const accessToken = jwt.sign(jwtPayload, 'hellothere', {
    expiresIn: '10d',
  });
  console.log(`Access-token is: ${accessToken}`);
  console.log(user.role);

  return {
    accessToken,
    _id,
  };
};

export const AuthServices = {
  signInUser,
};
