var express = require('express');
var app = express();

app.use(express.static('static'));

require('./routes/employeelist')(app);
require('./routes/inventorylist')(app);
require('./routes/itemlist')(app);
require('./routes/outside')(app);

var server = app.listen(3000, function () {
});
