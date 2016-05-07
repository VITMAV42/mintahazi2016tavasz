var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Item = db.model('Item', {
  name: String,
  type: Number,
  room: String
});

module.exports = Items;