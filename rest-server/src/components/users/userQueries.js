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

export const fetchAllUsersQuery = async (body) => {
  try {

  } catch (err) {

  }
};

export const fetchSingleUsersQuery = async (body) => {
  try {

  } catch (err) {

  }
};

export const fetchMultipleUsersQuery = async (body) => {
  try {

  } catch (err) {

  }
};

export const updateUserRatingQuery = async (body) => {
  try {
    
  } catch (err) {

  }
};
// I took the logic from the updateUserInfoQueries were doing
  // and put it in a single controller function in userControllers.js
    // ...saved a lot of duplicate code
     // - jon

export const updateUserRankingForTrueQuery = async (body) => {
  try { 
    let dataObj = {};
    
    const queryString1 = updateAndIncreasePRForTrueAndYesHelper(body);
    const data1 = await db.query(queryString1);
    dataObj['increasedPR'] = data1
    const queryString2 = updateAndDecreasePRForTrueAndNoHelper(body);
    const data2 = await db.query(queryString2)
    dataObj['decreasedPR'] = data2
    console.log('Success on updateUserRankingForTrueQuery')
    return dataObj;
  } catch (err) {
    console.log('Error on updateUserRankingForTrueQuery', err)
  }
}

export const updateUserRankingForFalseQuery = async (body) => {
  try {
    let dataObj = {};
    const queryString1 = updateAndIncreasePRForFalseAndNoHelper(body);
    const data1 = await db.query(queryString1);
    dataObj['increasedPR'] = data1;
    const queryString2 = updateAndIncreasePRForFalseAndYesHelper(body);
    const data2 = await db.query(queryString2);
    dataObj['decreasedPR'] = data2;
    console.log('dataobj', dataObj)
    console.log('Success on updateUserRankingsForFalseQuery', dataObj)
  } catch (err) {
    console.log('Error on updateUserRankingsForFalseQuery', err)
  }
}