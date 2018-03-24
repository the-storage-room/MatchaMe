import db from '../../config/database/index';

import {
  fetchCommentsHelper,
  addCommentHelper,
  voteOnCommentHelper,
  fetchTopCommentHelper,
} from './commentsSQLHelpers';

export const fetchCommentsQuery = async ({ matchId }) => {
  try {
    const data = await db.query(fetchCommentsHelper(), [matchId]);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const addCommentQuery = async ({ matchId, userId}, { comment, type }) => {
  try {
    const data = await db.query(addCommentHelper(), [userId, matchId, type, comment]);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const voteOnCommentQuery = async ({ matchId, vote }) => {
  try {
    const data = await db.query(voteOnCommentHelper(vote), [matchId]);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchTopCommentQuery = async ({ matchId }) => {
  try {
    const data = await db.query(fetchTopCommentHelper(), [matchId]);
    return data;
  } catch (err) {
    console.log(err);
  }
};