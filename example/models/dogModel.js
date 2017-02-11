var mongoose = require('mongoose');

var dogSchema = new mongoose.Schema({
    name: {type: String, required: true},
    breed: {type: String, required: true},
    color: {type: String, required: true}
});

module.exports = mongoose.model('Dog', dogSchema);
