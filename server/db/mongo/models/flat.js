/*
 * Schema Definitions
 */
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const deepPopulate = require('mongoose-deep-populate')(mongose);
const FlatSchema = new Schema({
    name: {
        type: String
    },
    price: {
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
    city: {
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
    days: [{
        type: Schema.ObjectId,
        ref: 'Day'
    }]
});

FlatSchema.plugin(deepPopulate);

export default mongoose.model('Flat', FlatSchema);