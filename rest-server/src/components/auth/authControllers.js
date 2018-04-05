import db from '../../config/database/index';
import {
  loginQuery,
  signupQuery,
  logoutQuery
} from './authQueries'
import {
  generateToken
} from '../../middleware/auth/jwt';
import {
  hashPassword
} from '../../middleware/auth/bcrypt';


export const loginController = async (req, res) => {
  try {
    const { rows } = await loginQuery(req.body);
    delete rows[0].password;
    const { id, email } = rows[0];
    const token = await generateToken(id, email);
    rows[0].token = token.accessToken;
    return res.status(200).header(`Authorization: bearer ${JSON.stringify(token.accessToken)}`).send(rows[0]);
  } catch (err) {
    throw new Error(err);
  }
};

export const signupController = async (req, res) => {
  try {
    req.body.password = await hashPassword(req.body.password);
    const { rows } = await signupQuery(req.body);
    const { id, username } = rows[0];
    const token = await generateToken(id, username);
    rows[0].token = token.accessToken;
    return res.status(200).append('Authorization', JSON.stringify(token)).send(rows[0]);
  } catch (err) {
    throw new Error(err);
  }
};

export const logoutController = async (req, res) => {
  try {
    req.logout();
    res.send('logged out');
  } catch (err) {
    throw new Error(err);
  }
};