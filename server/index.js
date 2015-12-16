'use strict';

var express = require('express');

var app = express()
  /**
   * @api {get} /jenkins/:jenkins
   * @apiName Get Jenkins Badges
   * @apiGroup Jenkins Badges
   * @apiParam {String} jenkins Path as specified by `jenkins-coverage-badge`.
   */
  .use('/jenkins', require('@hbetts/jenkins-coverage-badge'))
;

module.exports = app;
