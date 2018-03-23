import db from '../../config/database/index.js';

import {
  fetchPendingMatchmakingHelper,
  updateMatchmakingHelper
} from './matchmakingSQLHelpers';

export const fetchPendingMatchmakingQuery = async userId => {
  try {
    const string = fetchPendingMatchmakingHelper();
    const data = await db.query(string, [userId]);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const updateMatchmakingQuery = async ({ matchId, decision }) => {
  try {
    const string = updateMatchmakingHelper(decision);
    const { rows } = await db.query(string, [matchId]);
    return rows[0];
  } catch (err) {
    console.log(err);
  }
};
