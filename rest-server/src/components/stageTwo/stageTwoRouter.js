import express from 'express';

import {
  fetchStageTwoController,
  acceptStageTwoController,
  rejectStageTwoController,
  ghostStageTwoController
} from './stageTwoControllers';

const router = express.Router();

router.route('/fetchStageTwo/:userId').get(fetchStageTwoController);

router.route('/acceptStageTwo/:id/:userId').put(acceptStageTwoController);

router.route('/rejectStageTwo/:id').put(rejectStageTwoController);

router.route('/ghostStageTwo').put(ghostStageTwoController);

export default router;
