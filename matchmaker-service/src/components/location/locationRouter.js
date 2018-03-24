import express from 'express';

import {
  fetchDistanceController
} from './locationController';

const router = express.Router();

router.route('/fetchDistance/:user1zipcode/:user2zipcode')
  .get(fetchDistanceController)

export default router;