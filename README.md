# ci-coverage-badge

[![Build Status](https://travis-ci.org/hbetts/ci-coverage-badge.svg?branch=master)](https://travis-ci.org/hbetts/ci-coverage-badge)
[![codecov.io](https://codecov.io/github/hbetts/ci-coverage-badge/coverage.svg?branch=master)](https://codecov.io/github/hbetts/ci-coverage-badge?branch=master)
[![Dependency Status](https://david-dm.org/hbetts/ci-coverage-badge.svg)](https://david-dm.org/hbetts/ci-coverage-badge)
[![devDependency Status](https://david-dm.org/hbetts/ci-coverage-badge/dev-status.svg)](https://david-dm.org/hbetts/ci-coverage-badge#info=devDependencies)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

> A tiny web server to generate a code coverage badge from one of several CI providers.

## CI Providers Supported

The following CI providers are supported.

* [&#x2713;] [Jenkins](https://jenkins-ci.org/) - using [@hbetts/jenkins-coverage-badger](https://github.com/hbetts/jenkins-coverage-badge)

A badge from one of the providers can be retrieved from a URL that includes the server host, the CI provider name, and the path to the project. Using _Jenkins_ as an example the path would be `localhost:80/jenkins/job/my-project`.

Please read the documentation associated with each CI provider to ensure the badger service is setup correctly to serve coverage badges.

## Installation and Usage

There are two ways to run this coverage badge sever.

First, you can install this package, globally as shown below, and call the executable script that's installed in your `$PATH`.

```bash
npm install --global @hbetts/ci-coverage-badge
ccb [$PORT]
```

The second approach is to clone this repository, install the package's dependencies, and run the server with `npm start`:

```bash
git clone https://github.com/hbetts/ci-coverage-badge.git
cd ci-coverage-badge
npm install
npm start [$PORT]
```

When running the server you must either provide a port as an argument (As shown above), or you must set the `PORT` environmental variable before running the server. In the latter case you do not need to pass the port to the server as the server will pull the port value from the `PORT` environmental variable.
