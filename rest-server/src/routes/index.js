import express from ('express');

import authRouter from '../components/auth/authRouter';
import userRouter from '../components/users/userRouter';
import matchRouter from '../components/matches/matchRouter';
import successfulMatchRouter from '../components/successfulMatches/successfulMatchRouter';

const router = express.Router;

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/matches', matchRouter);
router.use('/successfulMatches', successfulMatchRouter);
router.use('/follows/', followRouter);

export default router;