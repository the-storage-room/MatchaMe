import db from '../../config/database/index';

import {
  fetchPendingMatchmakingHelper,
  updateMatchmakingHelper,
  inactivateMatchMakingHelper
} from './matchmakingSQLHelpers';

import { fetchSingleUsersQuery } from '../users/userQueries';

import { fetchCommentsQuery } from '../comments/commentsQueries';

export const fetchPendingMatchmakingQuery = async ({ userId }) => {
  try {
    const { rows } = await db.query(fetchPendingMatchmakingHelper(), [userId]);
    for (let match of rows) {
      match.user1_id = await fetchSingleUsersQuery({ userId: match.user1_id });
      match.user2_id = await fetchSingleUsersQuery({ userId: match.user2_id });
      match.comments = await fetchCommentsQuery({ matchId: match.id });
      await delete match.user1_id.preference;
      await delete match.user2_id.preference;
      await delete match.user1_id.powerranking;
      await delete match.user2_id.powerranking;
      await delete match.user1_id.signupcomplete;
      await delete match.user2_id.signupcomplete;
    }
    return rows;
  } catch (err) {
    console.log(err);
  }
};

export const updateMatchmakingQuery = async (
  { matchId, decision },
  increaseAmount
) => {
  try {
    const { rows } = await db.query(updateMatchmakingHelper(decision), [
      matchId,
      increaseAmount
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
