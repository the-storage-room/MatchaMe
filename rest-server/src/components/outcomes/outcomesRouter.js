import express from 'express';

import {
  fetchStarredMatchesController,
  fetchUnstarredMatchesController,
  starSingleMatchController,
  unstarSingleMatchController
} from './outcomesControllers';

const router = express.Router();

router.route('/fetchStarredMatches/:userId').get(fetchStarredMatchesController);

router
  .route('/fetchUnstarredMatches/:userId')
  .get(fetchUnstarredMatchesController);

router
  .route('/starSingleMatch/:userId/:matchId')
  .put(starSingleMatchController)

router
  .route('/unstarSingleMatch/:userId/:matchId')
  .put(unstarSingleMatchController)

export default router;
