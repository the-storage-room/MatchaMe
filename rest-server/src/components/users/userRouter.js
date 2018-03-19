import express from 'express';

import {
  fetchAllUsersController,
  fetchSingleUserController,
  fetchMultipleUsersController,
  updateUserRatingController,
  updateUserInfoController,
  fetchUserRankingController,
  updateUserRankingController
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

router.route('/fetchUsersRanking')
  .get(fetchUserRankingController);

router.route('/updateUsersRanking')
  .put(updateUserRankingController)

export default router;


