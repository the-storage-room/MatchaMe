import express from 'express';

import authRouter from '../components/auth/authRouter';
import userRouter from '../components/users/userRouter';
import matchmakingRouter from '../components/matchmaking/matchmakingRouter';
import stageTwoRouter from '../components/stageTwo/stageTwoRouter';
import outcomesRouter from '../components/outcomes/outcomesRouter';
import photoRouter from '../components/photos/photoRouter';
import tagsRouter from '../components/tags/tagsRouter';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/matchmaking', matchmakingRouter);
router.use('/stageTwo', stageTwoRouter);
router.use('/outcomes', outcomesRouter);
router.use('/photos', photoRouter);
router.use('/tags', tagsRouter);

export default router;
