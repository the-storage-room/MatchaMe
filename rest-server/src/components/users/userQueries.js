import db from '../../config/database/index';

import {
  fetchAllUsersHelper,
  fetchSingleUserHelper,
  fetchMultipleUsersHelper,
  updateUserRatingHelper,
  updateUserBioHelper,
  updateUserAgeHelper
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

export const updateUserBioQuery = async (body) => {
  try {
    const queryString = await updateUserBioHelper(body);
    const data = await db.query(queryString);
    return data;
  } catch (err) {

  }
};

export const updateUserAgeQuery = async (body) => {
  //console.log('getting called')
  try {
    const queryString = await updateUserAgeHelper(body);
    const data = await db.query(queryString);
    return data;
  } catch (err) {

  }
};