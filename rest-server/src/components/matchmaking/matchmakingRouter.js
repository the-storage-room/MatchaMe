import express from 'express';

import {
  fetchPendingMatchmakingController,
  updateMatchmakingController
} from './matchmakingControllers';

const router = express.Router();

router.route('/fetchPendingMatchmaking')
  .get(fetchPendingMatchmakingController);

router.route('/updateMatchmaking')
  .get(updateMatchmakingController);

export default router;
