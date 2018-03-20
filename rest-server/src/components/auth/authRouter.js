import express from 'express';

import {
  loginController,
  signupController,
  logoutController
} from './authControllers';

import passport from '../../middleware/validation/passport';

const router = express.Router();

router.route('/login')
  .post(passport.authenticate('local'), loginController);

router.route('/signup')
  .post(signupController);

router.route('/logout')
  .get(logoutController);

export default router;