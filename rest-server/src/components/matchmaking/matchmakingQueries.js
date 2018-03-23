import db from '../../config/database/index';

import {
  fetchPendingMatchmakingHelper,
  updateMatchmakingHelper,
  inactivateMatchMakingHelper
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
    console.log('Success with updateMatchmakingQuery');
    return rows[0];
  } catch (err) {
    console.log('Error with updateMatchmakingQuery: ', err);
  }
};

export const inactivateMatchMakingQuery = async body => {
  try {
    const queryString = inactivateMatchMakingHelper(body);
    const { rows } = await db.query(queryString);
    console.log('Success with inactivateMatchMakingQuery');
    return rows[0];
  } catch (err) {
    console.log('Error with inactivateMatchMakingQuery: ', err);
  }
};
