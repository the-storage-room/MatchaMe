import express from 'express';

import {
  fetchLeaderboardUsersController,
} from './leaderboardControllers';

const router = express.Router();

router.route('/fetchLeaderboardUsers')
  .get(fetchLeaderboardUsersController)
