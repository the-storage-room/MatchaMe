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
    body.age = Number(body.age);
    body.location = Number(body.location);
    body.powerranking = Number(body.powerranking);
    const queryString = signupHelper(body);
    const data = await db.query(queryString);
    return data;
  } catch (err) {

  }
};

export const logoutQuery = async (body) => {
  try {

  } catch (err) {

  }
};