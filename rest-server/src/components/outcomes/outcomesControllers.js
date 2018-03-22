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
    for (let match of data) {
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
    console.log('Success on fetchStarredMatchesController');
    return res.status(200).send(data);
  } catch (err) {
    console.log('Error on fetchStarredMatchesController', err);
  }
};

export const fetchUnstarredMatchesController = async (req, res) => {
  try {
    const data = await fetchUnstarredMatchesQuery(req.params);
    for (let match of data) {
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
    console.log('Success on fetchUnstarredMatchesController');
    return res.status(200).send(data);
  } catch (err) {
    console.log('Error on fetchUnstarredMatchesController', err);
  }
};

export const starSingleMatchController = async (req, res) => {
  try {
    const data = await starSingleMatchQuery(req.body);
    console.log('Success on starSingleMatchController', data);
    return res.status(200).send(data);
  } catch (err) {
    console.log('Error on starSingleMatchController', err);
  }
};

export const unstarSingleMatchController = async (req, res) => {
  try {
    const data = await unstarSingleMatchQuery(req.body);
    console.log('Success on unstarSingleMatchController', data);
    return res.status(200).send(data);
  } catch (err) {
    console.log('Error on unstarSingleMatchController', err);
  }
};
