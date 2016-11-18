/* Schema Definitions */
import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const deepPopulate = require('mongoose-deep-populate')(mongoose);
const StaySchema = new Schema({
  location: {
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
  reserved: [{
      from: String,
      to: String
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

