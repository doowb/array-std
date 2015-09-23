/*!
 * array-std <https://github.com/doowb/array-std>
 *
 * Copyright (c) 2015, Brian Woodward.
 * Licensed under the MIT License.
 */

'use strict';

var isNumber = require('is-number');
var avg = require('array-avg');
var map = require('arr-map');

module.exports = function (arr) {
  if (!Array.isArray(arr)) {
    return 0;
  }

  var average = avg(arr);
  var diffs = map(arr, function (n) {
    if (isNumber(n) && isFinite(n)) {
      var diff = n - average;
      return diff * diff;
    }
  });

  return Math.sqrt(avg(diffs));
};
