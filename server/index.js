'use strict';

var express = require('express');

var app = express()
  .use('/jenkins', require('@hbetts/jenkins-coverage-badge'))
;

module.exports = app;
