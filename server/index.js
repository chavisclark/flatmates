import express from 'express';
import webpack from 'webpack';
import { ENV } from './config/appConfig';
import { connect } from './db';
import passportConfig from './config/passport';
import expressConfig from './config/express';
import routes from './config/routes';
import webpackDevConfig from '../webpack/webpack.config.dev-client';

const App = require('../public/assets/server');
const app = express();

console.log('===>  🤖  Configuring server . . .');

connect();
passportConfig();

if (ENV === 'development') {
  const compiler = webpack(webpackDevConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackDevConfig.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

expressConfig(app);
routes(app);

app.get('*', App.default);

app.listen(app.get('port'));
