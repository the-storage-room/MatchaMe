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

router.route('/fetchMultipleUsers/:userID')
  .get(fetchMultipleUsersController);

<<<<<<< HEAD
router.route('/updateUserRating').put(updateUserRatingController);
=======
router.route('/updateUserRating')
  .put(updateUserAttractivenessController);
>>>>>>> refactor sql query

router.route('/updateUserInfo').put(updateUserInfoController);

router.route('/updateUserRanking/:matchId').put(updateUserRankingController);

export default router;
