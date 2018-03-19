// import db from '../../config/database';
import {
  fetchAllUsersQuery,
  fetchSingleUsersQuery,
  fetchMultipleUsersQuery,
  updateUserRatingQuery,
  updateUserInfoQuery,
  fetchUserRankingQuery,
  updateUserRankingQuery
} from './userQueries';

export const fetchAllUsersController = async (req, res) => {
  try {

  } catch (err) {

  }
};

export const fetchSingleUserController = async (req, res) => {
  try {

  } catch (err) {

  }
};

export const fetchMultipleUsersController = async (req, res) => {
  try {

  } catch (err) {

  }
};

export const updateUserRatingController = async (req, res) => {
  try {

  } catch (err) {

  }
};

export const updateUserInfoController = async (req, res) => {
  try {

  } catch (err) {

  }
};

export const fetchUserRankingController = async (req, res) => {
  try {
    const data = await fetchUserRankingQuery();
    console.log('Success on fetchUserRankingController', data);
    return data;
  } catch (err) {
    console.log('Error on fetchUserRankingController', err)
  }
};

export const updateUserRankingController = async (req, res) => {
  try {
    const data = await updateUserRankingQuery();
    console.log('Success on updatehUserRankingController', data);
    return data;
  } catch (err) {
    console.log('Error on fetchUserRankingController', err)
  }
};
