var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Employee = db.model('Employee', {
  name: String,
  email: String,
  room: String
});

module.exports = Employee;