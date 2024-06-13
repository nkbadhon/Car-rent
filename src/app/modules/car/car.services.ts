import { TCar } from './car.interface';
import { Car } from './car.model';

const createCarInDB = async (car: TCar) => {
  const result = await Car.create(car);
  return result;
};

const getAllCarsFromDB = async () => {
  const result = await Car.find();
  return result;
};

export const carServices = {
  createCarInDB,
  getAllCarsFromDB,
};
