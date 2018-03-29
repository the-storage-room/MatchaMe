import express from 'express';

import {
  fetchAllUsersController,
  fetchSingleUserController,
  updateUserInfoController,
  updateUserRankingController
} from './userControllers';

const router = express.Router();

router.route('/fetchAllUsers').get(fetchAllUsersController);

router.route('/fetchSingleUser/:userId').get(fetchSingleUserController);

router.route('/updateUserInfo').put(updateUserInfoController);

router.route('/updateUserRanking/:matchId').put(updateUserRankingController);

export default router;
