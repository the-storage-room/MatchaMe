import db from '../../config/database/index';

import {
  fetchAllUsersHelper,
  fetchSingleUserHelper,
  updateUserInfoHelper,
  updateAndIncreasePRForTrueAndYesHelper,
  updateAndDecreasePRForTrueAndNoHelper,
  updateAndIncreasePRForFalseAndNoHelper,
  updateAndIncreasePRForFalseAndYesHelper,
  fetchUsersTagsForRatingHelper,
} from './userSQLHelper';

import { 
  fetchAllPhotosQuery, 
  fetchPrimaryPhotoQuery
} from '../photos/photoQueries';



export const fetchAllUsersQuery = async body => {
  try {
    const { rows } = await db.query(fetchAllUsersHelper());
    for (let user of rows) {
      user.primaryPhoto = await fetchPrimaryPhotoQuery(user.id);
    }
    return rows;
  } catch (err) {
    console.log('Error with fetchAllUsersQuery :', err);
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
    console.log(err);
  }
};

export const fetchUsersTagsForRatingQuery = async (body) => {
  try {
    const queryString = await fetchUsersTagsForRatingHelper(body);
    const data = await db.query(queryString);
    return data;
  } catch (err) {
    console.log(err);
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
        let queryString = updateUserInfoHelper(key, body[key], body.id);
        data = await db.query(queryString, [body[key]]);
        console.log('success on userInfoQuery');
      }
    }
  } catch (err) {
    console.log(err);
  }
};

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
