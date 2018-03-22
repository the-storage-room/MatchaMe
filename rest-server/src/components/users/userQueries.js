import db from '../../config/database/index';

import {
  fetchAllUsersHelper,
  fetchSingleUserHelper,
  fetchMultipleUsersHelper,
  fetchUsersTagsHelper,
  updateUserAttractivenessHelper,
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
    const queryString = fetchSingleUserHelper(userId);
    const { rows } = await db.query(queryString);
    rows[0].photos = await fetchAllPhotosQuery(userId);
    return rows[0];
  } catch (err) {
    console.error
  }
};

export const fetchMultipleUsersQuery = async body => {
  try {
  } catch (err) {
<<<<<<< HEAD
    console.error
=======
    
  }
};

export const fetchUsersTagsQuery = async (body) => {
  try {
    const queryString = await fetchMultipleUsersHelper(body);
    const data = await db.query(queryString);
    return data;
  } catch (err) {

>>>>>>> get users info
  }
};

export const updateUserAttractivenessQuery = async (body) => {
  try {
    const queryString = updateUserRatingHelper(body);
    const data = await db.query(queryString);
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
        data = await db.query(queryString);
        console.log('success on userInfoQuery')
      }
    }
    return data;
  } catch (err) {
    console.error
  }
}

export const updateUserRankingForTrueQuery = async body => {
  try {
    let dataObj = {};

    const queryString1 = updateAndIncreasePRForTrueAndYesHelper(body);
    const data1 = await db.query(queryString1);
    dataObj['increasedPR'] = data1;
    const queryString2 = updateAndDecreasePRForTrueAndNoHelper(body);
    const data2 = await db.query(queryString2);
    dataObj['decreasedPR'] = data2;
    console.log('Success on updateUserRankingForTrueQuery');
    return dataObj;
  } catch (err) {
    console.log('Error on updateUserRankingForTrueQuery', err);
  }
};

export const updateUserRankingForFalseQuery = async body => {
  try {
    let dataObj = {};
    const queryString1 = updateAndIncreasePRForFalseAndNoHelper(body);
    const data1 = await db.query(queryString1);
    dataObj['increasedPR'] = data1;
    const queryString2 = updateAndIncreasePRForFalseAndYesHelper(body);
    const data2 = await db.query(queryString2);
    dataObj['decreasedPR'] = data2;
    console.log('dataobj', dataObj);
    console.log('Success on updateUserRankingsForFalseQuery', dataObj);
  } catch (err) {
    console.log('Error on updateUserRankingsForFalseQuery', err);
  }
};
