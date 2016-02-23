# ci-coverage-badge

[![Join the chat at https://gitter.im/hbetts/ci-coverage-badge](https://badges.gitter.im/hbetts/ci-coverage-badge.svg)](https://gitter.im/hbetts/ci-coverage-badge?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![Build Status](https://travis-ci.org/hbetts/ci-coverage-badge.svg?branch=master)](https://travis-ci.org/hbetts/ci-coverage-badge)
[![codecov.io](https://codecov.io/github/hbetts/ci-coverage-badge/coverage.svg?branch=master)](https://codecov.io/github/hbetts/ci-coverage-badge?branch=master)
[![Dependency Status](https://david-dm.org/hbetts/ci-coverage-badge.svg)](https://david-dm.org/hbetts/ci-coverage-badge)
[![devDependency Status](https://david-dm.org/hbetts/ci-coverage-badge/dev-status.svg)](https://david-dm.org/hbetts/ci-coverage-badge#info=devDependencies)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

> A tiny web server to generate a code coverage badge from one of several CI providers.

## Supported CI Providers

The following CI providers are supported.

* [&#x2713;] [jenkins](https://jenkins-ci.org/) - using [@hbetts/jenkins-coverage-badge](https://www.npmjs.com/package/@hbetts/jenkins-coverage-badge)

Please read the documentation associated with each CI provider to ensure the badger service is setup correctly to serve coverage badges.

## Installation and Launching

There are two ways to run this coverage badge server.

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

When running the server you must provide a port for the server to listed on. The port can be provided as either an argument (As shown above), or by setting the `PORT` environmental variable before running the server. In the latter case you do not need to pass the port to the server as the server will pull the port value from the `PORT` environmental variable.

The URL format for fetching a badge is as follows:

```
localhost:[PORT]/[CI PROVIDER]/
```

Everything after `[CI PROVIDER]` is determined by the requirements of the individual CI badge providers. As an example, for the _Jenkins_ provider, the path would be `localhost:80/jenkins/cobertura/job/my-project`.
