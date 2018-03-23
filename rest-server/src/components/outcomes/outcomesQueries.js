import db from '../../config/database/index';

import {
  fetchStarredMatchesHelper,
  fetchUnstarredMatchesHelper,
  starSingleMatchHelper,
  unstarSingleMatchHelper,
  addOutcomesHelper,
  fetchOneOutcomesHelper
} from './outcomesSQLHelpers';

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
    console.log('Success on fetchStarredMatchesQuery');
    return rows;
  } catch (err) {
    console.log('Error on fetchStarredMatchesQuery', err);
  }
};

export const fetchUnstarredMatchesQuery = async ({ userId }) => {
  try {
    const { rows } = await db.query(fetchUnstarredMatchesHelper(), [userId]);
    console.log('Success on fetchUnStarredMatchesQuery', rows);
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
