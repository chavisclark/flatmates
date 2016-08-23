/* Local strategy
----------------------------------------*/
import { Strategy as LocalStrategy } from 'passport-local';
import { passport as dbPassport } from '../../db';

export default (passport) => {
  passport.use(new LocalStrategy({
    usernameField: 'email'
  }, dbPassport.local));
};
