import db from '../../config/database/index';

import {
  fetchPendingMatchmakingHelper,
  updateMatchmakingHelper,
  inactivateMatchMakingHelper
} from './matchmakingSQLHelpers';

export const fetchPendingMatchmakingQuery = async ({ userId }) => {
  try {
    const { rows } = await db.query(fetchPendingMatchmakingHelper(), [userId]);
    return rows;
  } catch (err) {
    console.log(err);
  }
};

export const updateMatchmakingQuery = async ({ matchId, decision }) => {
  try {
    const { rows } = await db.query(updateMatchmakingHelper(decision), [
      matchId
    ]);
    console.log('Success with updateMatchmakingQuery');
    return rows[0];
  } catch (err) {
    console.log('Error with updateMatchmakingQuery: ', err);
  }
};

export const inactivateMatchMakingQuery = async ({ matchId }) => {
  try {
    const { rows } = await db.query(inactivateMatchMakingHelper(), [matchId]);
    console.log('Success with inactivateMatchMakingQuery');
    return rows[0];
  } catch (err) {
    console.log('Error with inactivateMatchMakingQuery: ', err);
  }
};
