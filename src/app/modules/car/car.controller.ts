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

// Getting single car
const getSingleCar = catchAsync(async (req, res) => {
  const { _id } = req.params;
  const result = await carServices.getSingleCarFromDb(_id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Car along with _id : ${_id} retrived successfully`,
    data: result,
  });
});

// Getting all cars
const getAllCars = catchAsync(async (req, res) => {
  const result = await carServices.getAllCarsFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Cars retrived successfully',
    data: result,
  });
});

export const carControllers = {
  createCar,
  getAllCars,
  getSingleCar,
};
