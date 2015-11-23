# ci-coverage-badge

[![Build Status](https://snap-ci.com/hbetts/ci-coverage-badge/branch/master/build_image)](https://snap-ci.com/hbetts/ci-coverage-badge/branch/master)
[![codecov.io](https://codecov.io/github/hbetts/ci-coverage-badge/coverage.svg?branch=master)](https://codecov.io/github/hbetts/ci-coverage-badge?branch=master)
[![Dependency Status](https://david-dm.org/hbetts/ci-coverage-badge.svg)](https://david-dm.org/hbetts/ci-coverage-badge)
[![devDependency Status](https://david-dm.org/hbetts/ci-coverage-badge/dev-status.svg)](https://david-dm.org/hbetts/ci-coverage-badge#info=devDependencies)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

> A tiny web server to generate a code coverage badge from one of several CI providers.

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

When running the server, you must either provide a port as an argument (As shown above), or you must set the `PORT` environmental variable before running the server as shown above. In the latter case, you do not need to pass the port to the server as the server will pull the port value from the `PORT` environmental variable.
