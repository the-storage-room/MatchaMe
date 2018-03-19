// import db from ....

import {
  fetchAllUsersHelper,
  fetchSingleUserHelper,
  fetchMultipleUsersHelper,
  updateUserRatingHelper,
  updateUserInfoHelper,
  fetchUserRankingHelper,
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

export const updateUserInfoQuery = async (body) => {
  try {

  } catch (err) {

  }
};

export const fetchUserRankingQuery = async (body) => {
  try {
    const queryString = fetchUserRankingHelper(body);
    const data = await db.query(queryString);
    console.log('Success on fetchUserRankingQuery', data);
    return data;
  } catch (err) {
    console.log('Error on fetchUserRankingQuery', err)
  }
};

export const updateUserRankingQuery = async (body) => {
  try {
    const queryString = updateUserRankingQuery(body);
    const data = await db.query(queryString);
    console.log('Success on updateUserRankingQuery', data)
    return data;
  } catch (err) {
    console.log('Error on updateUserRankingQuery', err)
  }
}