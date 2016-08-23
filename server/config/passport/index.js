/* Passport.js
--------------------------------------------------------- */
import passport from 'passport';
import local from './local';
import { passport as dbPassport } from '../../db';

export default () => {
  if (dbPassport && dbPassport.deserializeUser) {
    
    passport.serializeUser((user, done) => {
      done(null, user.id);
    });
    
    passport.deserializeUser(dbPassport.deserializeUser);
  } else {
    console.warn('Problem (de)serializing User');
  }

  local(passport);
};
