/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***************/

var tryRequire = require('../utils/try_require.js');
var assert = require('assert');

var peakFinder = tryRequire('../problems/1_peak_finder.js');
var divisibleByThreePairSum = tryRequire('../problems/2_divisible_by_three_pair_sum.js');
var zipArray = tryRequire('../problems/3_zip_array.js');
var twoDimensionalTotal = tryRequire('../problems/4_two_dimensional_total.js');

describe('peakFinder()', function () {
  it('should return array of the index of each peak', function () {
    var arr1 = peakFinder([1, 2, 3, 2, 1]);
    var arr2 = peakFinder([2, 1, 2, 3, 4, 5]);
    var arr3 = peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5]);

    assert.deepEqual(arr1, [2]);
    assert.deepEqual(arr2, [0, 5]);
    assert.deepEqual(arr3, [2, 6, 8]);
  });
});


describe('divisibleByThreePairSum()', function () {
  it("should return a two dimensional array of index pairs", function () {
    var arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
    var result1 = [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]];

    var arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
    var result2 = [[1, 3]];

    assert.deepEqual(arr1, result1);
    assert.deepEqual(arr2, result2);
  });
});


describe('zipArray()', function () {
  it('should return a two dimensional array zipping the two given arrays', function () {
    var a1 = ['a', 'b', 'c', 'd'];
    var a2 = [10, 20, 30, 40];
    var result = [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ];

    assert.deepEqual(zipArray(a1, a2), result);
  });
});


describe('twoDimensionalTotal()', function () {
  it('should return number that is the sum of all numbers in the two dimensional array', function () {
    var arr1 = [
      [5, 2, 5, 3],
      [12, 13],
    ];

    var arr2 = [
      [2],
      [1, 9],
      [1, 1, 1]
    ];

    assert.equal(twoDimensionalTotal(arr1), 40);
    assert.equal(twoDimensionalTotal(arr2),  15);
  });
});
