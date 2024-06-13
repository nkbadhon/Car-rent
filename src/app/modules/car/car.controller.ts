import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { carServices } from './car.services';
import AppError from '../../Errors/AppError';
import { Request, Response } from 'express';

const createCar = catchAsync(async (req, res) => {
  //   Getting the data from request body as carData
  const { car: carData } = req.body;

  // Sending it to the service page
  const result = await carServices.createCarInDB(carData);

  //   sending response to the user
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Car created successfully',
    data: result,
  });
});

const getAllCars = async (req: Request, res: Response) => {
  try {
    const result = await carServices.getAllCarsFromDB();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'All Cars retrived successfully',
      data: result,
    });
  } catch (err) {
    throw new AppError(httpStatus.BAD_GATEWAY, 'Failed to get all cars');
  }
};

export const carControllers = {
  createCar,
  getAllCars,
};
