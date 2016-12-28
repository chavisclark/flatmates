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
  category: {
    type: String
  },
  keywords: [{ 
    type: String
  }],
  sent: {
    type: Date
  },
  expire: {
    type: Date    
  }
})

export default mongoose.model('Outing', OutingSchema);

