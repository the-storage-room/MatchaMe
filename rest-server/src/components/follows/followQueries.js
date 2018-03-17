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
  } catch (err) {
    error('Error on fetching all starred matches', err);
  }
};

export const fetchUnstarredMatchesQuery = async (body) => {
  try {

  } catch (err) {

  }
};

export const starSingleMatchQuery = async (body) => {
  try {

  } catch (err) {

  }
};

export const unstarSingleMatchQuery = async (body) => {
  try {

  } catch (err) {

  }
};