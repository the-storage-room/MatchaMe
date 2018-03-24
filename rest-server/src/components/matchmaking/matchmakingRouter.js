import express from 'express';

import {
  fetchPendingMatchmakingController,
  updateMatchmakingController
} from './matchmakingControllers';

const router = express.Router();

router
  .route('/fetchPendingMatchmaking/:userId')
  .get(fetchPendingMatchmakingController);

router
  .route('/updateMatchmaking')
  .put(updateMatchmakingController);

export default router;
