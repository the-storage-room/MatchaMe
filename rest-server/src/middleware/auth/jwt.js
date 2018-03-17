import {
  sign,
  verify
} from 'jsonwebtoken';

const generateToken = (id, email) => {
  const token = {};

  token.accessToken = sign({
    exp: Math.floor(Date.now() / 1000 + (60 * 60)),
    email,
    id,
  }, process.env.TOKEN_SECRET);
  return token;
};

const verifyUserWithJWT = (req, res, next) => {
  try {
    // verify();
    // next() ;
  } catch (e) {
    console.log(e)
  }
};