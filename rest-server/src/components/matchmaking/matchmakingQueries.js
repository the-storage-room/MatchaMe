import db from '../../config/database/index.js';

import {
  fetchPendingMatchmakingHelper,
  updateMatchmakingHelper
} from './matchmakingSQLHelpers';

export const fetchPendingMatchmakingQuery = async userId => {
  try {
    const string = fetchPendingMatchmakingHelper(userId);
    const data = await db.query(string);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const updateMatchmakingQuery = async body => {
  try {
    const string = updateMatchmakingHelper(body);
    const data = await db.query(string);
    return data;
  } catch (err) {
    console.log(err);
  }
};
