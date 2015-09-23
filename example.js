'use strict';

var avg = require('array-avg');
var std = require('./');
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 25];

console.log();
console.log('Standard Deviation: ', std(arr));
console.log('Average: ', avg(arr));
console.log();
