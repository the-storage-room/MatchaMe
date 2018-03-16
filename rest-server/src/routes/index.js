import express from 'express';

import authRouter from '../components/auth/authRouter';
import userRouter from '../components/users/userRouter';
import matchmakingRouter from '../components/matchmaking/matchmakingRouter';
import successfulMatchRouter from '../components/successfulMatches/successfulMatchRouter';
import followRouter from '../components/follows/followRouter';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/matchmaking', matchmakingRouter);
router.use('/successfulMatches', successfulMatchRouter);
router.use('/follows/', followRouter);

export default router;