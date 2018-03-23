import db from '../../config/database/index.js';

import { loginHelper, signupHelper, logoutHelper } from './authSQLHelpers';

export const loginQuery = async body => {
  try {
    const { username } = body;
    const queryString = loginHelper(body);
    const data = await db.query(queryString, [username]);
    return data;
  } catch (err) {}
};

export const signupQuery = async body => {
  try {
    const { username, password, email } = body;
    const queryString = signupHelper(body);
    const data = await db.query(queryString, [username, password, email]);
    return data;
  } catch (err) {}
};
