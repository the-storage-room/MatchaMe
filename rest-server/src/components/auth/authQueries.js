import db from '../../config/database/index.js';

import {
  loginHelper,
  signupHelper,
  logoutHelper
} from './authSQLHelpers';

export const loginQuery = async (body) => {
  try {
    const queryString = loginHelper(body)
    const data = await db.query(queryString);
    return data;
  } catch (err) {

  }
};

export const signupQuery = async (body) => {
  try {
    const queryString = signupHelper(body);
    const data = await db.query(queryString);
    console.log(body)
    return data;
  } catch (err) {

  }
};

export const logoutQuery = async (body) => {
  try {

  } catch (err) {

  }
};