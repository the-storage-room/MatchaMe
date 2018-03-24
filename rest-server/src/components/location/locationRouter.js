import express from 'express';

import fetchZipCodeController from './locationController';

const router = express.Router();

router.route('/fetchZipCode')
  .get(fetchZipCodeController)

export default router;