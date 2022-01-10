const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student schema & model
const RapperSchema = new Schema({
    name: {
        type: String,
    },
    album: {
        type: String,
        required: [true, 'Album field is required']
    },
    price: {
        type: Number,
        default: true
    }
});


const Rapper = mongoose.model('rapper',RapperSchema);

module.exports = Rapper;