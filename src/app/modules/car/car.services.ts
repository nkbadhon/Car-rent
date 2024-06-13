import QueryBuilder from '../../builder/QueryBuilder';
import { carSearchableFields } from './car.const';
import { TCar } from './car.interface';
import { Car } from './car.model';

const createCarInDB = async (car: TCar) => {
  const result = await Car.create(car);
  return result;
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
};
