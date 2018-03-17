import db from '../../config/database/index'

import {
  fetchStarredMatchesHelper,
  fetchUnstarredMatchesHelper,
  starSingleMatchHelper,
  unstarSingleMatchHelper
} from './followSQLHelpers';

export const fetchStarredMatchesQuery = async (payload) => {
  try {
    const query = fetchStarredMatchesHelper(payload);
    const data = await db.queryAsync(query);
    success('Success on fetching all starred matches')
    return data;
  } catch (err) {
    error('Error on fetching all starred matches', err);
  }
};

export const fetchUnstarredMatchesQuery = async (payload) => {
  try {
    const query = fetchUnstarredMatchesHelper(payload);
    const data = await db.queryAsync(query);
    success('Success on fetching all unstarred matches');
    return data;
  } catch (err) {
    error('Error on fetching unstarred matches', err)
  }
};

export const starSingleMatchQuery = async (payload) => {
  try {
    const query = starSingleMatchHelper(payload);
    const data = await db.queryAsync(query);
    success('Succes on starring a single match');
    return data;
  } catch (err) {
    error('Error on starring a single match', err)
  }
};

export const unstarSingleMatchQuery = async (payload) => {
  try {
    const query = unstarSingleMatchHelper(payload);
    const data = await db.queryAsync(query);
    success('Success on unstarring a single match');
    return data;
  } catch (err) {
    error('Error on unstarring a single match', err)
  }
};