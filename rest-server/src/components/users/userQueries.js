import db from '../../config/database/index';

import {
  fetchAllUsersHelper,
  fetchSingleUserHelper,
  fetchMultipleUsersHelper,
  updateUserRatingHelper,
  updateUserInfoHelper,
  updateUserRankingHelper
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

export const updateUserRankingQuery = async () => {
  try { 
    const queryString = updateUserRankingHelper();
    const data = await db.query(queryString);
    console.log('Success on updateUserRankingQuery', data)
  } catch (err) {
    console.log('Success on updateUserRankingQuery', err)
  }
}

// I took the logic from the updateUserInfoQueries were doing
  // and put it in a single controller function in userControllers.js
    // ...saved a lot of duplicate code
     // - jon

  
