import { trusted } from 'mongoose';
import QueryBuilder from '../../builder/QueryBuilder';
import { carSearchableFields } from './car.const';
import { TCar } from './car.interface';
import { Car } from './car.model';
import AppError from '../../Errors/AppError';
import httpStatus from 'http-status';

const createCarInDB = async (car: TCar) => {
  const result = await Car.create(car);
  return result;
};

// Getting single car
const getSingleCarFromDb = async (_id: string) => {
  const result = await Car.findById({ _id });
  return result;
};

// Updating a car
const updateSingleCarInDB = async (_id: string, payload: Partial<TCar>) => {
  const result = await Car.findByIdAndUpdate(_id, payload, { new: true });

  // If car not found, showing an error
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Car not found');
  }
  return result;
};

// Deleting a car
const deleteCarFromDB = async (_id: string) => {
  // checking either car exist or not
  const isCarExist = await Car.findById(_id);

  if (isCarExist) {
    const result = await Car.findByIdAndUpdate(
      _id,
      { isDeleted: true },
      { new: true },
    );
    return result;
  } else {
    throw new AppError(httpStatus.NOT_FOUND, 'Car not found');
  }
};

// Getting all cars from DB
const getAllCarsFromDB = async (query: Record<string, unknown>) => {
  const carQuery = new QueryBuilder(Car.find(), query)
    .search(carSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await carQuery.modelQuery;
  return result;
};

export const carServices = {
  createCarInDB,
  getAllCarsFromDB,
  getSingleCarFromDb,
  updateSingleCarInDB,
  deleteCarFromDB,
};
