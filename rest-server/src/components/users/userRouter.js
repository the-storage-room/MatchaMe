import express from ('express');

import {
  fetchAllUsersController,
  fetchSingleUserController,
  fetchMultipleUsersController
} from './userControllers';

const router = express.Router();

router.route('/fetchAllUsers')
  .get(fetchAllUsersController);

router.route('/fetchSingleUser')
  .get(fetchSingleUserController);

router.route('/fetchMultipleUsers')
  .get(fetchMultipleUsersController);

export default router;


