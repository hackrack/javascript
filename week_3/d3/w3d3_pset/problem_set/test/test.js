/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***************/

var tryRequire = require('../utils/try_require.js');
var assert = require('assert');

var myForEach = tryRequire('../problems/1_my_for_each.js');
var mySelect = tryRequire('../problems/2_my_select.js');
var myMap = tryRequire('../problems/3_my_map.js');
var myEvery = tryRequire('../problems/4_my_every.js');
var mySome = tryRequire('../problems/5_my_some.js');
var countAdjacentSums = tryRequire('../problems/6_count_adjacent_sums.js');
var signFlipCount = tryRequire('../problems/7_sign_flip_count.js');
var powerSequence = tryRequire('../problems/8_power_sequence.js');
var collapseString = tryRequire('../problems/9_collapse_string.js');

describe('myForEach()', function () {
  it('should call the callback on each element in the given array', function () {
    var expected = [
      [ 'a', 0, [ 'a', 'b', 'c' ] ],
      [ 'b', 1, [ 'a', 'b', 'c' ] ],
      [ 'c', 2, [ 'a', 'b', 'c' ] ]
    ];

    var result = [];

    myForEach(['a', 'b', 'c'], function (el, i, arr) {
      result.push([el, i, arr]);
    });

    assert.deepEqual(expected, result);
  });
});


describe('mySelect()', function () {
  it('should return an array of numbers that the callbacks return true', function () {
    function isEven(num) {
      return num % 2 === 0;
    }

    function isNegative(num) {
      return num < 0;
    }

    assert.deepEqual(mySelect([1,2,3,4,5,6], isEven), [ 2, 4, 6 ]);
    assert.deepEqual(mySelect([12, -14, 4, -10.2, 0], isNegative), [ -14, -10.2 ]);
  });
});


describe('myMap()', function () {
  it('should return an array where each element is the result of the callback', function () {
    function doubler(num) {
      return num * 2;
    }

    assert.deepEqual(myMap([2, 4, 6, 1], doubler), [ 4, 8, 12, 2 ]);
    assert.deepEqual(myMap([9, 25, 100, 36, 81], Math.sqrt), [ 3, 5, 10, 6, 9 ]);
  });
});


describe('myEvery()', function () {
  it('should return a boolean true if all the results of the callback return true, false otherwise', function () {
    function isEven(num) {
      return num % 2 === 0;
    }

    assert.equal(myEvery([10, 4, 8, 20], isEven), true);
    assert.equal(myEvery([2, 2, 10, 11, 12], isEven), false);
  });
});


describe('mySome()', function () {
  it('should return a boolean true if any the results of the callback return true, false otherwise', function () {
    function isEven(num) {
      return num % 2 === 0;
    }

    function isNegative(num) {
      return num < 0;
    }

    assert.equal(mySome([1, 3, 5, 6], isEven), true);
    assert.equal(mySome([1, 3, 5], isEven), false);
    assert.equal(mySome([10, -10, 11, 4], isNegative), true);
    assert.equal(mySome([-10, -10, -11, -4], isNegative), true);
    assert.equal(mySome([2, 4, 6, 8], isNegative), false);
  });
});


describe('countAdjacentSums()', function () {
  it('should return the number of adjacent numbers that sum to n', function () {
    assert.equal(countAdjacentSums([1, 5, 1], 6), 2);
    assert.equal(countAdjacentSums([7, 2, 4, 6], 7), 0);
    assert.equal(countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13), 3);
  });
});


describe('signFlipCount()', function () {
  it('should return the number of times adjacent numbers flip from signs', function () {
    assert.equal(signFlipCount([5, 6, 10, 3]), 0);
    assert.equal(signFlipCount([-12, 0, -3, -5]), 0);
    assert.equal(signFlipCount([-12, 10, -3, -5]), 2);
    assert.equal(signFlipCount([1, -2, -3, -4]), 1);
    assert.equal(signFlipCount([-1, 11.3, -3, 100]), 3);
  });
});


describe('powerSequence()', function () {
  it('should returns an array of a base powers that is equal to "length"', function () {
    assert.deepEqual(powerSequence(3, 4), [ 3, 9, 27, 81 ]);
    assert.deepEqual(powerSequence(2, 6), [ 2, 4, 8, 16, 32, 64 ]);
    assert.deepEqual(powerSequence(8, 3), [ 8, 64, 512 ]);
  });
});


describe('collapseString()', function () {
  it('should return a string where all repeating characters are collaped into one character', function () {
    assert.equal(collapseString('apple'), 'aple');
    assert.equal(collapseString('AAAaalviiiiin!!!'), 'Aalvin!');
    assert.equal(collapseString('hello   app academy'), 'helo ap academy');
  });
});
