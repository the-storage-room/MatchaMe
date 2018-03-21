import db from '../../config/database/index';

import {
  fetchAllUsersHelper,
  fetchSingleUserHelper,
  fetchMultipleUsersHelper,
  updateUserRatingHelper,
  updateUserInfoHelper,
  updateAcceptedUserRankingHelper,
  updateRejectedUserRankingHelper
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

export const updateAcceptedUserRankingForTrueQuery = async () => {
  try { 
    let dataObj = {};
    const queryString1 = updateAndIncreasePRForTrueAndYesHelper();
    const data1 = await db.query(queryString);
    dataObj['increasedPR'] = data1
    const queryString2 = updateAndDecreasePRForTrueAndNoHelper();
    const data2 = await db.query(queryStsring)
    dataObj['decreasedPR'] = data2
    console.log('Success on updateAcceptedUserRankingQuery', data)
    return dataObj;
  } catch (err) {
    console.log('Error on updateAcceptedUserRankingQuery', err)
  }
}



  
