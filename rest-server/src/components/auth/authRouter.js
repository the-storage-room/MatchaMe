import express from 'express';

import {
  loginController,
  signupController,
  logoutController
} from './authControllers';

const router = express.Router();

router.route('/login')
  .post(loginController);

router.route('/signup')
  .post(signupController);

router.route('/logout')
  .get(logoutController);

export default router;