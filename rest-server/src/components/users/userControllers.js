import db from '../../config/database/index';
import {
  fetchAllUsersQuery,
  fetchSingleUsersQuery,
  fetchMultipleUsersQuery,
  updateUserRatingQuery,
  updateUserInfoQuery,
  updateUserRankingForTrueQuery,
  updateUserRankingForFalseQuery
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
    res.status(200).send(data);
  } catch (err) {
    throw new Error(err);
  }
};

//if both parties say yes (successful match)
//if either party says no (unsuccessful match)

//if req.body.finalDecision = success

export const updateUserRankingController = async (req, res) => {
  try {
    const { finalDecision } = req.body;
    finalDecision === 'success' ? updateUserRankingForTrueQuery(): updateUserRankingForFalseQuery();
    res.status(200).send();
  } catch (err) {
    console.log('Error on updateUserRankingController')
  }
}
