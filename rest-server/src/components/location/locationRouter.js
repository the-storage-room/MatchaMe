import express from 'express';

import {
  fetchDistanceController,
  fetchLonAndLatFromZipCodeController,
  fetchUserZipcodeController
} from './locationController';

const router = express.Router();


router.route('/fetchUserZipcode/:userId')
  .get(fetchUserZipcodeController)

router.route('/fetchDistance/:user1zipcode/:user2zipcode')
  .get(fetchDistanceController)

export default router;