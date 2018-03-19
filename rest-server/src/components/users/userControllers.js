// import db from '../../config/database';
import {
  fetchAllUsersQuery,
  fetchSingleUsersQuery,
  fetchMultipleUsersQuery,
  updateUserRatingQuery,
  updateUserBioQuery
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
  const queries = {
    bio: updateUserBioQuery,
    
  }
  try {
    const updatedInfo = {};
    for (let key in req.body) {
      if (key === 'username') {
        continue;
      } else {
        let query = queries[key];
        let { rows } = await query(req.body);
        updatedInfo[key] = rows[0][key];
      };
    };
    res.status(200).send(updatedInfo);
  } catch (err) {
    throw new Error(err);
  }
};
