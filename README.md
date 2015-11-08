# tap

[![Build Status](https://travis-ci.org/javiercejudo/tap.svg)](https://travis-ci.org/javiercejudo/tap)
[![Coverage Status](https://coveralls.io/repos/javiercejudo/tap/badge.svg?branch=master)](https://coveralls.io/r/javiercejudo/tap?branch=master)
[![Code Climate](https://codeclimate.com/github/javiercejudo/tap/badges/gpa.svg)](https://codeclimate.com/github/javiercejudo/tap)

tap(x, y) == y(x)

## Install

    npm i @javiercejudo/tap

## Usage

```js
const tap = require('tap');

const plus1 = x => x + 1;
const times5 = x => 5 * x;

[plus1, times5].reduce(tap, 3); // => 20
```

See [spec](test/spec.js).
