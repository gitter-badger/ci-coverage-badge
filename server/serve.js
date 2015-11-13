'use strict';

var express = require('express');
var winston = require('winston');

var app = express()
	.use(require('./index'));

var port = process.argv.slice(2)[0];
if (!port) {
  port = 9913;
}

var server = app.listen(port, function() {
  winston.log('Listening on port %d...', server.address().port);
});
