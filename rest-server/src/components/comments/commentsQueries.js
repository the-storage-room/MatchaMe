import db from '../../config/database/index';

import {
  fetchCommentsHelper,
  addCommentHelper,
  voteOnCommentHelper,
  fetchTopCommentHelper
} from './commentsSQLHelpers';

export const fetchCommentsQuery = async ({ matchId }) => {
  try {
    const { rows } = await db.query(fetchCommentsHelper(), [matchId]);
    return rows;
  } catch (err) {
    console.log(err);
  }
};

export const addCommentQuery = async (
  { matchId, userId },
  { comment, type }
) => {
  try {
    const { rows } = await db.query(addCommentHelper(), [
      userId,
      matchId,
      type,
      comment
    ]);
    return rows;
  } catch (err) {
    console.log(err);
  }
};

export const voteOnCommentQuery = async ({ matchId, vote }) => {
  try {
    const { rows } = await db.query(voteOnCommentHelper(vote), [matchId]);
    return rows;
  } catch (err) {
    console.log(err);
  }
};

export const fetchTopCommentQuery = async ({ matchId }) => {
  try {
    const { rows } = await db.query(fetchTopCommentHelper(), [matchId]);
    return rows;
  } catch (err) {
    console.log(err);
  }
};
