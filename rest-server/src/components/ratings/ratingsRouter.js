import express from 'express';

import {
  fetchMultipleUsersController,
  updateUserAttractivenessController,
} from './ratingsControllers';

const router = express.Router();

router.route('/fetchMultipleUsers/:id').get(fetchMultipleUsersController);

router.route('/updateUserRating').put(updateUserAttractivenessController);

export default router;
