import db from '../../config/database/index';

import {
  fetchStageTwoHelper,
  acceptStageTwoHelper,
  rejectStageTwoHelper,
  ghostStageTwoHelper,
  addStageTwoHelper
} from './stageTwoSQLHelpers';

import { fetchSingleUsersQuery } from '../users/userQueries';
import { fetchAllPhotosQuery } from '../photos/photoQueries';
import { FORMERR } from 'dns';

export const addStageTwoQuery = async ({ matchId }) => {
  try {
    const queryString = addStageTwoHelper();
    const { rows } = await db.query(queryString, [matchId]);
    console.log('Success with addStageTwo');
    return rows;
  } catch (err) {
    console.log('Error with addStageTwo', err);
  }
};

export const fetchStageTwoQuery = async ({ userId }) => {
  try {
    const { rows } = await db.query(fetchStageTwoHelper(), [userId]);
    if (rows[0].user1_id === parseInt(userId)) {
      // rows[0].photos = await fetchAllPhotosQuery(rows[0].user2_id);
      rows[0].user2_id = await fetchSingleUsersQuery({
        userId: rows[0].user2_id
      });
    }
    if (rows[0].user2_id === parseInt(userId)) {
      // rows[0].photos = await fetchAllPhotosQuery(rows[0].user1_id);
      rows[0].user1_id = await fetchSingleUsersQuery({
        userId: rows[0].user1_id
      });
    }

    return rows[0];
  } catch (err) {
    console.log('Error with fetchStageTwoQuery', err);
  }
};

export const acceptStageTwoQuery = async ({ id, userId }) => {
  try {
    let rows;
    const check = await db.query(fetchStageTwoHelper(), [id]);
    const queryStrings = acceptStageTwoHelper();
    if (!!check.rows[0].firstdecision) {
      rows = await db.query(queryStrings[0], [id]);
    } else {
      rows = await db.query(queryStrings[1], [userId, id]);
    }
    console.log('Successful with acceptStageTwoQuery');
    return rows.rows;
  } catch (err) {
    console.log('Error with acceptStageTwoQuery', err);
  }
};

export const rejectStageTwoQuery = async ({ id }) => {
  try {
    const queryString = rejectStageTwoHelper();
    const { rows } = await db.query(queryString, [id]);
    console.log('Successful with rejectStageTwoQuery');
    return rows;
  } catch (err) {
    console.log('Error with rejectStageTwoQuery', err);
  }
};

export const ghostStageTwoQuery = async body => {
  try {
  } catch (err) {}
};
