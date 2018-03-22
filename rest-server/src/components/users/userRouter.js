import express from 'express';

import {
  fetchAllUsersController,
  fetchSingleUserController,
  fetchMultipleUsersController,
  updateUserRatingController,
  updateUserInfoController,
  updateUserRankingController
} from './userControllers';

const router = express.Router();

router.route('/fetchAllUsers').get(fetchAllUsersController);

router.route('/fetchSingleUser/:userId').get(fetchSingleUserController);

router.route('/fetchMultipleUsers/:userId').get(fetchMultipleUsersController);

router.route('/updateUserRating').put(updateUserRatingController);

router.route('/updateUserInfo').put(updateUserInfoController);

router.route('/updateUserRanking/:matchId').put(updateUserRankingController);

export default router;
