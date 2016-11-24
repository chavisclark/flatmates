/* Schema Definitions */
import bcrypt from 'bcrypt-nodejs';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const deepPopulate = require('mongoose-deep-populate')(mongoose);
const UserSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  name: { 
    type: String, 
    default: '' 
  },
  job: { 
    type: String, 
    default: ''
  },
  company: {
    type: String, 
    default: '' 
  },
  gender: { 
    type: String, 
    default: '' 
  },
  location: { 
    type: String, 
    default: '' 
  },
  website: { 
    type: String, 
    default: '' 
  },
  picture: { 
    type: String, 
    default: '' 
  },
  bio: {
    type: String, 
    default: ''
  },
  profile: {},
  stays: [{
           type: Schema.ObjectId,
           ref: 'Stay'
  }],
  reserved: [{
      from: String,
      to: String
  }],
  roomieReq: { 
    type: Boolean, 
    default: false 
  },
  password: String,
  fake: Boolean
});

function encryptPassword(next) {
  const user = this;
  if (!user.isModified('password')) return next();
  return bcrypt.genSalt(5, (saltErr, salt) => {
    if (saltErr) return next(saltErr);
    return bcrypt.hash(user.password, salt, null, (hashErr, hash) => {
      if (hashErr) return next(hashErr);
      user.password = hash;
      return next();
    });
  });
}

UserSchema.plugin(deepPopulate);
UserSchema.pre('save', encryptPassword);
UserSchema.methods = {
  comparePassword(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
      if (err) return cb(err);
      return cb(null, isMatch);
    });
  }
};

export default mongoose.model('User', UserSchema);
