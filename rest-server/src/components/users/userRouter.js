import express from 'express';

import {
  fetchAllUsersController,
  fetchSingleUserController,
  fetchMultipleUsersController,
  updateUserRatingController,
  updateUserInfoController,
} from './userControllers';

const router = express.Router();

router.route('/fetchAllUsers')
  .get(fetchAllUsersController);

router.route('/fetchSingleUser')
  .get(fetchSingleUserController);

router.route('/fetchMultipleUsers/:userId')
  .get(fetchMultipleUsersController);

router.route('/updateUserRating')
  .put(updateUserRatingController);

router.route('/updateUserInfo')
  .put(updateUserInfoController);

export default router;


