'use strict';

// jshint expr:true

var nock = require('nock');
var request = require('supertest');

var app = require('./index');

function generateJenkinsReponse(protocol) {
  return nock(protocol + '://d7.mnpk.org')
    .get('/jenkins/job/goyo/lastSuccessfulBuild/cobertura/api/json/')
    .query({ depth: 2 });
}

describe('coverage results', function() {

  afterEach(function() {
    nock.cleanAll();
  });

  it('return coverage none when jenkins job doesn\'t exist', function(done) {
    var jenkins = generateJenkinsReponse('http')
      .reply(404);

    request(app)
      .get('/jenkins/cobertura/http/d7.mnpk.org/jenkins/job/goyo')
      .expect(302)
      .expect('Location', 'https://img.shields.io/badge/coverage-none-lightgrey.svg')
      .end(function(err) {
        jenkins.done();
        done(err);
      });
  });

  it('returns a 302 redirect on 100 test coverage', function(done) {
    var jenkins = generateJenkinsReponse('http')
      .reply(200, require('./cobertura.100.json'));

    request(app)
      .get('/jenkins/cobertura/http/d7.mnpk.org/jenkins/job/goyo')
      .expect(302)
      .expect('Location', 'https://img.shields.io/badge/coverage-100%-brightgreen.svg')
      .end(function(err) {
        jenkins.done();
        done(err);
      });
  });
});
