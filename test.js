/*!
 * array-std <https://github.com/doowb/array-std>
 *
 * Copyright (c) 2015 .
 * Licensed under the MIT license.
 */

'use strict';

/* deps:mocha */
var assert = require('assert');
var should = require('should');
var std = require('./');

describe('array-std', function () {
  it('should calculate the standard deviation', function () {
    assert.equal(std([1, 2, 3, 4, 5, 6, 7, 8, 9, 25]), 6.48074069840786);
  });
});
