import {
  fetchStarredMatchesQuery,
  fetchUnstarredMatchesQuery,
  starSingleMatchQuery,
  unstarSingleMatchQuery
} from './outcomesQueries';

import { fetchSingleUsersQuery } from '../users/userQueries';

export const fetchStarredMatchesController = async (req, res) => {
  try {
    const data = await fetchStarredMatchesQuery(req.params);
    return res.status(200).send(data);
  } catch (err) {
    console.log('Error on fetchStarredMatchesController', err);
  }
};

export const fetchUnstarredMatchesController = async (req, res) => {
  try {
    const data = await fetchUnstarredMatchesQuery(req.params);
    return res.status(200).send(data);
  } catch (err) {
    console.log('Error on fetchUnstarredMatchesController', err);
  }
};

export const starSingleMatchController = async (req, res) => {
  try {
    const { userId } = req.params;
    const { matchId } = req.params;
    const data = await starSingleMatchQuery({ userId, matchId });
    return res.status(200).send();
  } catch (err) {
    console.log('Error on starSingleMatchController', err);
  }
};

export const unstarSingleMatchController = async (req, res) => {
  try {
    const { userId } = req.params;
    const { matchId } = req.params;
    const data = await unstarSingleMatchQuery({ userId, matchId });
    return res.status(200).send();
  } catch (err) {
    console.log('Error on unstarSingleMatchController', err);
  }
};
