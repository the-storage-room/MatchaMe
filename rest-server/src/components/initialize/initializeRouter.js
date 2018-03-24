import express from 'express';

import { fetchInitializeController } from './initializeController';

import passport from '../../middleware/validation/passport';

const router = express.Router();

router.route('/:userId').get(fetchInitializeController);

export default router;
