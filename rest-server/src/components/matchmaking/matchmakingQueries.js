import db from '../../config/database/index';

import {
  fetchPendingMatchmakingHelper,
  updateMatchmakingHelper,
  inactivateMatchMakingHelper,
  fetchSingleUsersTagsForMatchmakingHelper
} from './matchmakingSQLHelpers';

import { fetchSingleUsersQuery } from '../users/userQueries';

import { fetchCommentsQuery } from '../comments/commentsQueries';

export const fetchPendingMatchmakingQuery = async ({ userId }) => {
  try {
    const { rows } = await db.query(fetchPendingMatchmakingHelper(), [userId]);
    for (let match of rows) {
      match.user1 = await fetchSingleUsersQuery({ userId: match.user1_id });
      match.user2 = await fetchSingleUsersQuery({ userId: match.user2_id });
      match.comments = await fetchCommentsQuery({ matchId: match.id });
      await delete match.user1.preference;
      await delete match.user2.preference;
      await delete match.user1.powerranking;
      await delete match.user2.powerranking;
      await delete match.user1.signupcomplete;
      await delete match.user2.signupcomplete;
      
      let user1tags = await db.query(fetchSingleUsersTagsForMatchmakingHelper(match.user1.id))
      match.user1.tags = user1tags.rows.map(tag => {
        return tag.tag
      })

      let user2tags = await db.query(fetchSingleUsersTagsForMatchmakingHelper(match.user2.id))
      match.user2.tags = user2tags.rows.map(tag => {
        return tag.tag
      })

      match.user1.photos = match.user1.photos.map(photo => {
        return photo.url
      })

      match.user2.photos = match.user2.photos.map(photo => {
        return photo.url
      })
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
