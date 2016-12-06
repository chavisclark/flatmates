/* Schema Definitions */
import mongoose, { Schema } from 'mongoose';

const OutingSchema = new mongoose.Schema({
  owner: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  text: {
    type: String
  },
  keywords: [{ 
    type: String
  }]
})

export default mongoose.model('Outing', OutingSchema);

