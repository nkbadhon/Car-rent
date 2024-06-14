import express from 'express';
import { AuthValidation } from './auth.validation';
import validateRequest from '../../middleware/validateRequest';
import { Authcontrollers } from './auth.controllers';

const router = express.Router();

router.post(
  '/signin',
  validateRequest(AuthValidation.signInValidationSchema),
  Authcontrollers.signInUser,
);

// router.post(
//   '/change-password',
//   auth(USER_ROLE.admin, USER_ROLE.faculty, USER_ROLE.student),
//   validateRequest(AuthValidation.changePasswordValidationSchema),
//   AuthControllers.changePassword,
// );

// router.post(
//   '/refresh-token',
//   validateRequest(AuthValidation.refreshTokenValidationSchema),
//   AuthControllers.refreshToken,
// );

export const AuthRoutes = router;
