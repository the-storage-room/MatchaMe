import express from 'express';

import authRouter from '../components/auth/authRouter';
import userRouter from '../components/users/userRouter';
import matchmakingRouter from '../components/matchmaking/matchmakingRouter';
import stageTwoRouter from '../components/stageTwo/stageTwoRouter';
import outcomesRouter from '../components/outcomes/outcomesRouter';
import photoRouter from '../components/photos/photoRouter';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/matchmaking', matchmakingRouter);
router.use('/successfulMatches', stageTwoRouter);
router.use('/follows', outcomesRouter);
router.use('/photos', photoRouter);

export default router;
