import {
  compare,
  genSalt,
  hash
} from 'bcrypt';

const hashPassword = async (password) => {
  const salt = await genSalt(JSON.parse(process.env.SALT_ROUNDS));
  const hashed = await hash(password, salt);
  return hashed;
};

const comparePasswords = async (password, hash) => {
  const result = compare(password, hash);
  return result;
};

module.exports.hashPassword = hashPassword;
module.exports.comparePasswords = comparePasswords;