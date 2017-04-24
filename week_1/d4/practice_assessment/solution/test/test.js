/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***********************/

var tryRequire = require('../utils/try_require.js');
var assert = require('assert');

var average = tryRequire('../problems/1_average.js');
var tripler = tryRequire('../problems/2_tripler.js');
var oddRange = tryRequire('../problems/3_odd_range.js');


describe('average()', function () {
  it('should return the average of num1 and num2', function () {
    assert.equal(average(10, 20), 15);
    assert.equal(average(5, 7), 6);
    assert.equal(average(24, 32), 28);
    assert.equal(average(-100, 100), 0);
  });
});

describe('tripler()', function () {
  it('should return a new array containing 3 times every element of the original array', function () {
    assert.deepEqual(tripler([1,2,3]), [ 3, 6, 9 ]);
    assert.deepEqual(tripler([4, 1, 7]), [ 12, 3, 21 ]);
    assert.deepEqual(tripler([-1, 1, 10]), [-3, 3, 30]);
  });
});

describe('oddRange()', function () {
  it('should return an array containing all positive odd numbers up to `end`', function () {
    assert.deepEqual(oddRange(13), [ 1, 3, 5, 7, 9, 11, 13 ]);
    assert.deepEqual(oddRange(6), [ 1, 3, 5 ]);
    assert.deepEqual(oddRange(10), [1, 3, 5, 7, 9]);
  });
});
