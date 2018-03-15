import express from ('express');

import {
  fetchAllUsersController,
  fetchSingleUserController,
  fetchMultipleUsersController,
  updateUserRatingController
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

export default router;


