var Schema = require('mongoose').Schema;
var db = require('../config/db');


var Inventory = db.model('Inventory', {
  _item: {
    type: Schema.Types.ObjectId,
    ref: 'Item'
  },
  _owner: {
    type: Schema.Types.ObjectId,
    ref: 'Employee'
  },
  from: Date
});

module.exports = Inventory;