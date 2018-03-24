import db from '../../config/database/index';

import {
  fetchStarredMatchesHelper,
  fetchUnstarredMatchesHelper,
  starSingleMatchHelper,
  unstarSingleMatchHelper,
  addOutcomesHelper,
  fetchOneOutcomesHelper
} from './outcomesSQLHelpers';

import { fetchSingleUsersQuery } from '../users/userQueries';

import { fetchCommentsQuery } from '../comments/commentsQueries';

export const addOutcomeQuery = async ({
  userId,
  matchId,
  starred,
  decision
}) => {
  try {
    const check = await db.query(fetchOneOutcomesHelper(), [userId, matchId]);
    if (check.rows.length === 0) {
      const { rows } = await db.query(addOutcomesHelper(), [
        userId,
        matchId,
        starred,
        decision
      ]);
      console.log('Success on addOutcomeQuery');
      return rows[0];
    } else {
      console.log('User already voted on this match!');
      return null;
    }
  } catch (err) {
    console.log('Error on addOutcomeQuery', err);
  }
};

export const fetchStarredMatchesQuery = async ({ userId }) => {
  try {
    const { rows } = await db.query(fetchStarredMatchesHelper(), [userId]);
    for (let match of rows) {
      match.user1_id = await fetchSingleUsersQuery({ userId: match.user1_id });
      match.user2_id = await fetchSingleUsersQuery({ userId: match.user2_id });
      match.comments = await fetchCommentsQuery({ matchId: match.id });
      await delete match.user1_id.age;
      await delete match.user2_id.age;
      await delete match.user1_id.location;
      await delete match.user2_id.location;
      await delete match.user1_id.preference;
      await delete match.user2_id.preference;
      await delete match.user1_id.bio;
      await delete match.user2_id.bio;
      await delete match.user1_id.powerranking;
      await delete match.user2_id.powerranking;
      await delete match.user1_id.signupcomplete;
      await delete match.user2_id.signupcomplete;
    }
    console.log('Success on fetchStarredMatchesQuery');
    return rows;
  } catch (err) {
    console.log('Error on fetchStarredMatchesQuery', err);
  }
};

export const fetchUnstarredMatchesQuery = async ({ userId }) => {
  try {
    const { rows } = await db.query(fetchUnstarredMatchesHelper(), [userId]);
    for (let match of rows) {
      match.user1_id = await fetchSingleUsersQuery({ userId: match.user1_id });
      match.user2_id = await fetchSingleUsersQuery({ userId: match.user2_id });
      await delete match.user1_id.age;
      await delete match.user2_id.age;
      await delete match.user1_id.location;
      await delete match.user2_id.location;
      await delete match.user1_id.preference;
      await delete match.user2_id.preference;
      await delete match.user1_id.bio;
      await delete match.user2_id.bio;
      await delete match.user1_id.powerranking;
      await delete match.user2_id.powerranking;
      await delete match.user1_id.signupcomplete;
      await delete match.user2_id.signupcomplete;
    }
    console.log('Success on fetchUnStarredMatchesQuery');
    return rows;
  } catch (err) {
    console.log('Error on fetchUnstarredMatchesQuery', err);
  }
};

export const starSingleMatchQuery = async ({ userId, matchId }) => {
  try {
    const data = await db.query(starSingleMatchHelper(), [matchId, userId]);
    console.log('Success on starSingleMatchQuery');
    return data;
  } catch (err) {
    console.log('Error on starSingleMatchQuery', err);
  }
};

export const unstarSingleMatchQuery = async ({ matchId, userId }) => {
  try {
    const data = await db.query(unstarSingleMatchHelper(), [matchId, userId]);
    console.log('Success on unstarSingleMatchQuery', data);
    return data;
  } catch (err) {
    console.log('Error on unstarSingleMatchQuery', err);
  }
};
