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

router.get('/:_id', carControllers.getSingleCar);
router.get('/', carControllers.getAllCars);

export const CarRoutes = router;
