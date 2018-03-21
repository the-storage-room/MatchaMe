import passport from 'passport';
import jwt from 'passport-jwt';
import local from 'passport-local';

import {
  loginQuery
} from '../../components/auth/authQueries';
import {
  comparePasswords
} from '../auth/bcrypt';

const JwtStrategy = jwt.Strategy;
const ExtractJwt = jwt.ExtractJwt;
const LocalStrategy = local.Strategy;

const localOptions = {
  usernameField: 'username',
};

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: process.env.TOKEN_SECRET
};

// options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// options.secretOrKey = 'secret';


passport.use(new LocalStrategy(localOptions, async (username, password, done) => {
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

export default passport;