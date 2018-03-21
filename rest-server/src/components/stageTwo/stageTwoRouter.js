import express from 'express';

import {
  fetchStageTwoController,
  acceptStageTwoController,
  rejectStageTwoController,
  ghostStageTwoController
} from './stageTwoControllers';

const router = express.Router();

router.route('/fetchStageTwo').get(fetchStageTwoController);

router.route('/acceptStageTwo').put(acceptStageTwoController);

router.route('/rejectStageTwo').put(rejectStageTwoController);

router.route('/ghostStageTwo').put(ghostStageTwoController);

export default router;
