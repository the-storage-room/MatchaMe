import db from '../../config/database/index';

import {
  fetchAllUsersHelper,
  fetchSingleUserHelper,
  fetchMultipleUsersHelper,
  updateUserRatingHelper,
  updateUserInfoHelper,
  updateAndIncreasePRForTrueAndYesHelper,
  updateAndDecreasePRForTrueAndNoHelper,
  updateAndIncreasePRForFalseAndNoHelper,
  updateAndIncreasePRForFalseAndYesHelper
} from './userSQLHelper';

import { fetchAllPhotosQuery } from '../photos/photoQueries';

export const fetchAllUsersQuery = async body => {
  try {
  } catch (err) {
    console.error
  }
};

export const fetchSingleUsersQuery = async body => {
  try {
    const { userId } = body;
    const queryString = fetchSingleUserHelper();
    const { rows } = await db.query(queryString, [userId]);
    rows[0].photos = await fetchAllPhotosQuery(userId);
    return rows[0];
  } catch (err) {
    console.error
  }
};

export const fetchMultipleUsersQuery = async body => {
  try {
  } catch (err) {
    console.error
  }
};

export const updateUserRatingQuery = async ({ attractiveness, id }) => {
  try {
    const queryString = updateUserRatingHelper();
    const data = await db.query(queryString, [attractiveness, id]);
    return data;
  } catch (err) {
   console.error
  }
};

export const updateUserInfoQuery = async body => {
  try {
    let data;
    for (let key in body) {
      if (key === 'id' || key === 'username') {
        continue;
      } else {
        if (
          key === 'age' ||
          key === 'location' ||
          key === 'gender' ||
          key === 'preference'
        ) {
          body[key] = Number(body[key]);
        }
        let queryString = updateUserInfoHelper(
          key,
          body[key],
          body.id
        );
        data = await db.query(queryString, [key, body[key], body.id]);
        console.log('success on userInfoQuery')
      }
    }
    return data;
  } catch (err) {
    console.error
  }
}

export const updateUserRankingForTrueQuery = async matchId => {
  try {
    let dataObj = {};
    const queryString1 = updateAndIncreasePRForTrueAndYesHelper();
    const data1 = await db.query(queryString1, [matchId]);
    dataObj['increasedPR'] = data1;
    const queryString2 = updateAndDecreasePRForTrueAndNoHelper();
    const data2 = await db.query(queryString2, [matchId]);
    dataObj['decreasedPR'] = data2;
    console.log('Success on updateUserRankingForTrueQuery');
    return dataObj;
  } catch (err) {
    console.log('Error on updateUserRankingForTrueQuery', err);
  }
};

export const updateUserRankingForFalseQuery = async matchId => {
  try {
    let dataObj = {};
    const queryString1 = updateAndIncreasePRForFalseAndNoHelper();
    const data1 = await db.query(queryString1, [matchId]);
    dataObj['increasedPR'] = data1;
    const queryString2 = updateAndIncreasePRForFalseAndYesHelper();
    const data2 = await db.query(queryString2, [matchId]);
    dataObj['decreasedPR'] = data2;
    console.log('Success on updateUserRankingsForFalseQuery', dataObj);
  } catch (err) {
    console.log('Error on updateUserRankingsForFalseQuery', err);
  }
};
