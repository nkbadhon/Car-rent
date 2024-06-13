import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const userData = req.body;

  console.log(userData);

  const result = await UserServices.createUserInDB(userData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});

export const UserControllers = {
  createUser,
};
