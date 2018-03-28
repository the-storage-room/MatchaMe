import express from 'express';

import {
  fetchStageTwoController,
  acceptStageTwoController,
  rejectStageTwoController,
  endStageTwoController
} from './stageTwoControllers';

const router = express.Router();

router.route('/fetchStageTwo/:userId').get(fetchStageTwoController);

router.route('/acceptStageTwo/:id/:userId').put(acceptStageTwoController);

router.route('/rejectStageTwo/:id/:userId').put(rejectStageTwoController);

router.route('/endStageTwo/:id').put(endStageTwoController);

export default router;
