import {
  sign,
  verify
} from 'jsonwebtoken';

const generateToken = (id, email) => {
  const token = {};

  token.accessToken = sign({
    exp: Math.floor(Date.now() / 1000 + (60 * 60)),
    id,
    email
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

module.exports.generateToken = generateToken;
module.exports.verifyUserWithJWT = verifyUserWithJWT;