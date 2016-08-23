import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';
import { db } from './constants';

export default () => {

  const connect = () => {
    mongoose.Promise = global.Promise; // https://github.com/Automattic/mongoose/issues/4291#issuecomment-238497541
    mongoose.connect(db, (err) => {
      if (err) {
        console.log(`===> ❌  Error connecting to ${db}`);
        console.log(`Reason: ${err}`);
      } else {
        console.log(`===> 🍻  Succeeded in connecting to ${db} `);
      }
    });
  };

  connect();

  mongoose.connection.on('error', console.log);
  mongoose.connection.on('disconnected', connect);

  const modelPath = path.join(__dirname, 'models');

  fs.readdirSync(modelPath).forEach((file) => {
    if (~file.indexOf('.js')) require(`${modelPath}/${file}`);
  });
};
