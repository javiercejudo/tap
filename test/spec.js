/*jshint node:true, esnext:true, mocha:true */

'use strict';

require('should');

const tap = require('../src/');

const plus1 = x => x + 1;
const times5 = x => 5 * x;

describe('tap', function() {
  it('apply the second argument to the first value', function() {
    [plus1, times5].reduce(tap, 3).should.be.exactly(20);
  });
});
