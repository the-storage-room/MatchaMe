import express from 'express';

import leaderboardRouter from './Leaderboard/leaderboardRouter';

const router = express.Router();

router.use('/leaderboard', leaderboardRouter);

export default router;
