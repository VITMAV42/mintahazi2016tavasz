var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/inventory');

module.exports = mongoose;