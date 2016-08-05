'use strict';
var express = require('express');
var routes = require('./public/routes/index.js');


var app = express();
require('dotenv').load();

app.use(express.static(__dirname + '/public'));




routes(app);

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});