import passport from 'passport';
import jwt from 'passport-jwt';

import {
  loginQuery
} from '../../components/auth/authQueries';
import {
  comparePasswords
} from '../auth/bcrypt';

const JwtStrategy = jwt.Strategy;
const ExtractJwt = jwt.ExtractJwt;

const options = {};

options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = 'secret';

passport.use(new JwtStrategy(options, async (username, password, done) => {
  try {
    const { rows } = await loginQuery({ username });
    if (!rows.length) {
      return done(null, false);
    }
    const passwordsMatch = await comparePasswords(password, rows[0].password);
    if (!passwordsMatch) {
      return done(null, false);
    }
    return done(null, rows);
  } catch (err) {
    return done(err);
  }
}));

passport.use(new JwtStrategy(options, async (jwt_payload, done) => {
 
}));