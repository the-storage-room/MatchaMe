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

export const updateAcceptedUserRankingQuery = async () => {
  try { 
    const queryString = updateAcceptedUserRankingHelper();
    const data = await db.query(queryString);
    console.log('Success on updateAcceptedUserRankingQuery', data)
  } catch (err) {
    console.log('Error on updateAcceptedUserRankingQuery', err)
  }
}

export const updateRejectedUserRankingQuery = async() => {
  try {
    const queryString = updateRejectedUserRankingHelper();
    const data = await db.query(queryString);
    console.log('Success on updateRejectedUserRankingQuery', data)
  } catch (err) {
    console.log('Error on updateRejectedUserRankingQuery', err)
  }
}

// I took the logic from the updateUserInfoQueries were doing
  // and put it in a single controller function in userControllers.js
    // ...saved a lot of duplicate code
     // - jon

  
