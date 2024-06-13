import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { carValidations } from './car.validation';
import { carControllers } from './car.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(carValidations.createCarValidationSchema),
  carControllers.createCar,
);

// To update a single car
router.patch('/:_id', carControllers.updateSingleCar);

// to get a single car
router.get('/:_id', carControllers.getSingleCar);

// To get all the cars
router.get('/', carControllers.getAllCars);

export const CarRoutes = router;
