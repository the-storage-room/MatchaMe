import db from '../../config/database/index';
import {
  fetchAllUsersQuery,
  fetchSingleUsersQuery,
  fetchMultipleUsersQuery,
  updateUserRatingQuery,
  updateUserInfoQuery,
  updateUserRankingQuery
} from './userQueries';
import {
  updateUserInfoHelper
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
  try {
    const updatedInfo = {};
    for (let key in req.body) {
      if (key === 'username') {
        continue;
      } else {
        if (key === "age" || key === "location" || key === "gender" || key === "preference") {
          req.body[key] = Number(req.body[key]);
        }
        let queryString =  updateUserInfoHelper(key, req.body[key], req.body.username);
        let data = await db.query(queryString);
        updatedInfo[key] = data.rows[0][key];
      };
    };
    res.status(200).send(updatedInfo);
  } catch (err) {
    throw new Error(err);
  }
};

export const updateUserRankingController = async (req, res) => {
  try {
    //data should be an object with increase and decreased powerranking
    const data = updateUserRankingQuery()
    res.status(200).send(data)
  } catch (err) {
    console.log('Error on updateUserRankingController')
  }
}