'use strict';

var express = require('express');
var winston = require('winston');

var app = express()
  .use(require('./index'));

var port = process.argv.slice(2)[0];
if (port) {
  startServer(port);
} else if (process.env.PORT) {
  startServer(process.env.PORT);
} else {
  winston.error('Invalid port value provided. Either a port must be provided as an argument, ' +
    'or as the PORT environmental variable.');
}

function startServer(port) {
  var server = app.listen(port, function () {
    winston.info('Listening on port %d...', server.address().port);
  });
}
