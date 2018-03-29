import express from 'express';

import authRouter from '../components/auth/authRouter';
import userRouter from '../components/users/userRouter';
import matchmakingRouter from '../components/matchmaking/matchmakingRouter';
import stageTwoRouter from '../components/stageTwo/stageTwoRouter';
import outcomesRouter from '../components/outcomes/outcomesRouter';
import photoRouter from '../components/photos/photoRouter';
import tagsRouter from '../components/tags/tagsRouter';
import commentsRouter from '../components/comments/commentsRouter';
import initializeRouter from '../components/initialize/initializeRouter';
import ratingsRouter from '../components/ratings/ratingsRouter';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/matchmaking', matchmakingRouter);
router.use('/stageTwo', stageTwoRouter);
router.use('/outcomes', outcomesRouter);
router.use('/photos', photoRouter);
router.use('/tags', tagsRouter);
router.use('/comments', commentsRouter);
router.use('/initialize', initializeRouter)
router.use('/ratings', ratingsRouter)

export default router;
