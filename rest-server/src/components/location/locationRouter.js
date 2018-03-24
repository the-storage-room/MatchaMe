import express from 'express';

import {
  fetchDistanceController,
  fetchLonAndLatFromZipCodeController,
  fetchUserZipcodeController
} from './locationController';

const router = express.Router();


router.route('/fetchUserZipcode')
  .get(fetchUserZipcodeController)

// router.route('/fetchLonAndLatFromZipCode')
//   .get(fetchLonAndLatFromZipCodeController)

// router.route('/fetchDistanceBetweenTwoCoordinate')
//   .get(fetchDistanceController)

export default router;