import express from 'express';

import {
  fetchStageTwoController,
  acceptStageTwoController,
  rejectOrEndStageTwoController
} from './stageTwoControllers';

const router = express.Router();

router.route('/fetchStageTwo/:userId').get(fetchStageTwoController);

router.route('/acceptStageTwo/:id/:userId').put(acceptStageTwoController);

router.route('/rejectOrEndStageTwo/:id/:userId').put(rejectOrEndStageTwoController);

export default router;
