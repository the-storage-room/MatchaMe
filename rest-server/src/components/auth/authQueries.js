import db from '../../config/database/index.js';

import {
  loginHelper,
  signupHelper,
  logoutHelper
} from './authSQLHelpers';

export const loginQuery = async (body) => {
  try {

  } catch (err) {

  }
};

export const signupQuery = async (body) => {
  try {
    body.age = Number(body.age);
    body.location = Number(body.location);
    body.powerranking = Number(body.powerranking);
    //onsole.log(body)
    const queryString = signupHelper(body);
    console.log(queryString);
    //console.log(db)
    const data = await db.query(queryString);
    console.log(data)
    return data;
  } catch (err) {

  }
};

export const logoutQuery = async (body) => {
  try {

  } catch (err) {

  }
};