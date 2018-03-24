import express from 'express';

import {
  fetchCommentsController,
  addCommentController,
  voteOnCommentController,
  fetchTopCommentController
} from './commentsControllers';

const router = express.Router();

router
  .route('/fetchComments/:matchId')
  .get(fetchCommentsController);

router
  .route('/addComment/:matchId')
  .post(addCommentController);

router
  .route('/voteOnComment/:commentId/:vote')
  .put(voteOnCommentController);

router
  .route('/fetchTopComment/:matchId')
  .get(fetchTopCommentController);

export default router;
