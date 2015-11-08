/*jshint node:true */

'use strict';

module.exports = function tap(value, fn) {
  return fn(value);
};
