/* Schema Definitions */
import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const deepPopulate = require('mongoose-deep-populate')(mongoose);
const FlatSchema = new Schema({
    name: {
        type: String
    },
    price_per_month: {
        type: Number
    },
    rooms: {
        type: Number
    },
    beds: {
        type: Number
    },
    capacity: {
        type: Number
    },
    location: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    occupied: {
        type: Boolean,
        default: false
    },
    reserved: [{
        from: String,
        to: String
    }]
});

FlatSchema.plugin(deepPopulate);

export default mongoose.model('Flat', FlatSchema);