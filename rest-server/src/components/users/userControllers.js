import db from '../../config/database/index';
import {
  fetchAllUsersQuery,
  fetchSingleUsersQuery,
  fetchMultipleUsersQuery,
  updateUserRatingQuery,
} from './userQueries';
import {
  updateUserBioHelper,
  updateUserAgeHelper,
  updateUserLocationHelper,
  updateUserGenderHelper

} from './userSQLHelper';

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
  const queryHelpers = {
    bio: updateUserBioHelper,
    age: updateUserAgeHelper,
    location: updateUserLocationHelper,
    gender: updateUserGenderHelper
  }
  try {
    const updatedInfo = {};
    for (let key in req.body) {
      if (key === 'username') {
        continue;
      } else {
        if (key === "age" || key === "location") {
          req.body[key] = Number(req.body[key]);
        }
        let helper = queryHelpers[key];
        
        let queryString =  helper(req.body[key], req.body.username);
        console.log(queryString)
        let data = await db.query(queryString);
        updatedInfo[key] = data.rows[0][key];
      };
    };
    console.log(updatedInfo)
    res.status(200).send(updatedInfo);
  } catch (err) {
    throw new Error(err);
  }
};
