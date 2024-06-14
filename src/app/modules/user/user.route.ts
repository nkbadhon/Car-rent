import express from 'express';
import { UserControllers } from './user.controller';
import validateRequest from '../../middleware/validateRequest';
import { createuserValidationSchema } from './user.validation';
const router = express.Router();

router.post(
  '/signup',
  validateRequest(createuserValidationSchema),
  UserControllers.createUser,
);

router.get('/', UserControllers.getAllUsers);

export const UserRoutes = router;
