/* Schema Definitions */
import mongoose from 'mongoose';

const OutingSchema = new mongoose.Schema({
  text: {
    type: String
  },
  keyword: { 
    type: String
  },
  topic: { 
    type: String
  },
})

export default mongoose.model('Outing', OutingSchema);

