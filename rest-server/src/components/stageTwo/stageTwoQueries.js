import db from '../../config/database/index';

import {
  fetchStageTwoHelper,
  acceptStageTwoHelper,
  rejectOrEndStageTwoHelper,
  addStageTwoHelper
} from './stageTwoSQLHelpers';

import { fetchSingleUsersQuery } from '../users/userQueries';
import { fetchAllPhotosQuery } from '../photos/photoQueries';
import { fetchUserAndTheirPreferenceTagsQuery } from '../tags/tagsQueries';
import { fetchCommentsQuery } from '../comments/commentsQueries';
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
    if (rows[0]) {
      rows[0].comments = await fetchCommentsQuery({ matchId: rows[0].id });
      if (rows[0].user1_id === parseInt(userId)) {
        rows[0].tags = (await fetchUserAndTheirPreferenceTagsQuery(
          rows[0].user2_id,
          0
        )).map(tag => tag.tag);
        rows[0].user2_id = await fetchSingleUsersQuery({
          userId: rows[0].user2_id
        });
      }
      if (rows[0].user2_id === parseInt(userId)) {
        rows[0].tags = (await fetchUserAndTheirPreferenceTagsQuery(
          rows[0].user1_id,
          0
        )).map(tag => tag.tag);
        rows[0].user1_id = await fetchSingleUsersQuery({
          userId: rows[0].user1_id
        });
      }
      let { user1_id, user2_id } = rows[0];
      if (user1_id.id) {
        let newUser2 = user1_id;
        let newUser1 = user2_id;
        rows[0].user2_id = newUser2;
        rows[0].user1_id = newUser1;
      }
      return rows[0];
    }
    return null;
  } catch (err) {
    console.log('Error with fetchStageTwoQuery', err);
  }
};

export const acceptStageTwoQuery = async ({ id, userId }) => {
  try {
    let rows;
    const check = await db.query(fetchStageTwoHelper(), [userId]);
    const queryStrings = acceptStageTwoHelper();
    console.log(check.rows[0]);
    if (check.rows[0] && check.rows[0].firstaccept) {
      rows = await db.query(queryStrings[0], [userId, id]);
    } else {
      rows = await db.query(queryStrings[1], [userId, id]);
    }
    console.log('Successful with acceptStageTwoQuery');
    return rows.rows;
  } catch (err) {
    console.log('Error with acceptStageTwoQuery', err);
  }
};

export const rejectOrEndStageTwoQuery = async ({ id, userId }) => {
  try {
    const queryString = rejectOrEndStageTwoHelper();
    const { rows } = await db.query(queryString, [id, userId]);
    console.log('Successful with rejectStageTwoQuery');
    return rows;
  } catch (err) {
    console.log('Error with rejectStageTwoQuery', err);
  }
};
