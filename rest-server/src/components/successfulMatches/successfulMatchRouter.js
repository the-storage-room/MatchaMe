import express from 'express';

import {
  fetchSuccessfulMatchController,
  acceptSuccessfulMatchController,
  rejectSuccessfulMatchController,
  ghostSuccessfulMatchController
} from './successfulMatchControllers';

const router = express.Router();

router.route('/fetchSuccessfulMatch')
  .get(fetchSuccessfulMatchController);

router.route('/acceptSuccessfulMatch')
  .put(acceptSuccessfulMatchController);

router.route('/rejectSuccessfulMatch')
  .put(rejectSuccessfulMatchController);

router.route('/ghostSuccessfulMatch')
  .put(ghostSuccessfulMatchController);

export default router;