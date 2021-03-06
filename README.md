# array-std [![NPM version](https://badge.fury.io/js/array-std.svg)](http://badge.fury.io/js/array-std)  [![Build Status](https://travis-ci.org/doowb/array-std.svg)](https://travis-ci.org/doowb/array-std)

> Calculate the standard deviation of an array of numbers.

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i array-std --save
```

## Usage

```js
var std = require('array-std');

std([1, 2, 3, 4, 5, 6, 7, 8, 9, 25]);
//=> 6.48074069840786

std(['1', 2, '3', 4, 5, '6', 7, 8, 9, 25]);
//=> 6.48074069840786

std(['1', 'foo', 2, '3', 4, 5, '6', 7, {}, 8, 9, 25]);
//=> 6.011177859559577
```

## Related projects

* [arr-map](https://www.npmjs.com/package/arr-map): Faster, node.js focused alternative to JavaScript's native array map. | [homepage](https://github.com/jonschlinkert/arr-map)
* [array-avg](https://www.npmjs.com/package/array-avg): Calculate the average of an array of numbers. | [homepage](https://github.com/doowb/array-avg)
* [array-sum](https://www.npmjs.com/package/array-sum): Add up all of the numbers in an array of numbers. Works when non-numbers are… [more](https://www.npmjs.com/package/array-sum) | [homepage](https://github.com/jonschlinkert/array-sum)

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/doowb/array-std/issues/new).

## Author

**Brian Woodward**

+ [github/doowb](https://github.com/doowb)
+ [twitter/doowb](http://twitter.com/doowb)

## License

Copyright © 2015 Brian Woodward
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on September 23, 2015._