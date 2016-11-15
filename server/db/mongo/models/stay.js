/*
 * Schema Definitions
 */
import mongoose from 'mongoose';

var deepPopulate = require('mongoose-deep-populate')(mongoose);
var Schema = mongoose.Schema;
const StaySchema = new Schema({
  city: {
           type: String
  },
  flat: {
           type: Schema.ObjectId,
           ref: 'Flat'
  },
  tenant: {
           type: Schema.ObjectId,
           ref: 'User'
  },
  days: [{
        type: Schema.ObjectId,
        ref: 'Day'
  }],
  isConfirmed: {
        type: Boolean,
        default: false
  },
    isDenied: {
        type: Boolean,
        default: false
  },
  roomies: [{
              user: {
                     type: Schema.ObjectId,
                     ref: 'User'
            },
              stay: {
                     type: Schema.ObjectId,
                     ref: 'Stay'
            },
              approved: {
                     type: Boolean
            },

  }],
  date: { 
    type: Date, 
    default: Date.now 
  }
});

StaySchema.plugin(deepPopulate);

export default mongoose.model('Stay', StaySchema);

