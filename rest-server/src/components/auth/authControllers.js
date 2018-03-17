import db from '../../config/database/index';
import {
  loginQuery,
  signupQuery,
  logoutQuery
} from './authQueries'

import {
  hashPassword
} from '../../middleware/auth/bcrypt';


export const loginController = async (req, res) => {
  try {
    
  } catch (err) {

  }
};

export const signupController = async (req, res) => {
  try {
    req.body.password = await hashPassword(req.body.password);
    const { rows } = await signupQuery(req.body);
    
    //console.log(rows[0])
    return res.send(rows)
  } catch (err) {

  }
};

export const logoutController = async (req, res) => {
  try {

  } catch (err) {

  }
};