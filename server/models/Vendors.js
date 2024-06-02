const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vendorSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: false,
    },
    vendorId: {
        type: Number,
        required: true,
        unique: false,
    },
    coords: {
        type: Array,
        required: true,
        unique: false,
    },
    uuid: {
        type: String,
        required: true,
        unique: true,
    },
});

const Vendors = mongoose.model('Vendor', vendorSchema);

module.exports = Vendors;