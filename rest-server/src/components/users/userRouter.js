import express from 'express';

import {
  fetchAllUsersController,
  fetchSingleUserController,
  fetchMultipleUsersController,
  updateUserAttractivenessController,
  updateUserInfoController,
  updateUserRankingController
} from './userControllers';

const router = express.Router();

router.route('/fetchAllUsers').get(fetchAllUsersController);

router.route('/fetchSingleUser/:userId').get(fetchSingleUserController);

router.route('/fetchMultipleUsers/:attractiveness').get(fetchMultipleUsersController);

router.route('/updateUserRating').put(updateUserAttractivenessController);

router.route('/updateUserInfo').put(updateUserInfoController);

router.route('/updateUserRanking/:matchId').put(updateUserRankingController);

export default router;
