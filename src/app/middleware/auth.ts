import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import AppError from '../Errors/AppError';
import httpStatus from 'http-status';
import jwt from 'jsonwebtoken';
import config from '../config';

const auth = () => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return next(
        new AppError(
          httpStatus.UNAUTHORIZED,
          'Authentication token missing or malformed',
        ),
      );
    }

    const token = authHeader.split(' ')[1];

    console.log(`This is from header ${token}`);
    // checking the token is present or not

    console.log(`this is from backend ${config.jwt_access_secret}`);
    // Check if the token is valid

    jwt.verify(
      token,
      config.jwt_access_secret as string,
      function (err, decoded) {
        // if error
        if (err) {
          throw new AppError(httpStatus.UNAUTHORIZED, 'INVALID token');
        }
        console.log(decoded);
      },
    );

    next();
  });
};

export default auth;
