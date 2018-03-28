import express from 'express';

import { fetchLeaderboardAndRank } from './leaderboardController';

const router = express.Router();

router.route('/fetchLeaderboardAndRank/:userId').get(fetchLeaderboardAndRank);

export default router;
