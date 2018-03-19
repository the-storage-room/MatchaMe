import express from 'express';

import {
  fetchStarredMatchesController,
  fetchUnstarredMatchesController,
  starSingleMatchController,
  unstarSingleMatchController
} from './followControllers';

const router = express.Router();

router.route('/fetchStarredMatches')
  .get(fetchStarredMatchesController);

router.route('/fetchUnstarredMatches')
  .get(fetchUnstarredMatchesController);

router.route('/starSingleMatch')
  .put(starSingleMatchController);

router.route('/unstarSingleMatch')
  .put(unstarSingleMatchController);

export default router;

