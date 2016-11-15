/* Schema Definitions */
import mongoose from 'mongoose';

const DaySchema = new mongoose.Schema({
  date: { type: Date,
          unique: true
        }
})

export default mongoose.model('Day', DaySchema);

