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
    console.log('Success on fetchStarredMatchesController');
    return res.status(200).send(data);
  } catch (err) {
    console.log('Error on fetchStarredMatchesController', err);
  }
};

export const fetchUnstarredMatchesController = async (req, res) => {
  try {
    const data = await fetchUnstarredMatchesQuery(req.params);
    console.log('Success on fetchUnstarredMatchesController');
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
    console.log('Success on starSingleMatchController');
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
    console.log('Success on unstarSingleMatchController', data);
    return res.status(200).send();
  } catch (err) {
    console.log('Error on unstarSingleMatchController', err);
  }
};
