const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: false,
    },
    type: {
        type: String,
        required: true,
        unique: false,
    },
    isLocal: {
        type: Boolean,
        required: true,
        unique: false,
    },
    uuid: {
        type: String,
        required: true,
        unique: true,
    },
});

const Foods = mongoose.model('Food', foodSchema);

module.exports = Foods;