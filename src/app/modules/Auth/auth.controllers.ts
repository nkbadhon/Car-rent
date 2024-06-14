import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import config from '../../config';
import { AuthServices } from './auth.services';

const signInUser = catchAsync(async (req, res) => {
  const result = await AuthServices.signInUser(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is signed in succesfully!',
    data: {
      result,
    },
  });
});

export const Authcontrollers = {
  signInUser,
};
