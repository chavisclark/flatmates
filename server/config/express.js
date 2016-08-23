/* Express
 --------------------------------------------*/
import express from 'express';
import passport from 'passport';
import session from 'express-session';
import bodyParser from 'body-parser';
import path from 'path';
import flash from 'express-flash';
import methodOverride from 'method-override';
import { sessionSecret } from './secrets';
import { DB_TYPE, ENV } from './appConfig';
import { session as dbSession } from '../db';

export default (app) => {
  app.set('port', (process.env.PORT || 3000));

  app.disable('x-powered-by');
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(methodOverride());
  app.use(express.static(path.join(__dirname, '../..', 'public')));

  let sessionStore = null;
  sessionStore = !dbSession ? console.warn('No session store found') : dbSession();

  const sess = {
    resave: false,
    saveUninitialized: false,
    secret: sessionSecret,
    proxy: true,
    name: 'sessionId',
    cookie: {
      httpOnly: true,
      secure: false,
    },
    store: sessionStore
  };

  console.log('-------------------------------');
  console.log('===>  🍺  Starting Server . . .');
  console.log(`===>  :: Environment: ${ENV}`);
  console.log(`===>  :: Listening on port: ${app.get('port')}`);
  console.log(`===>  :: Using DB TYPE: ${DB_TYPE}`);
  console.log('-------------------------------');

  app.use(session(sess));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());
};
