/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***************/

var tryRequire = require('../utils/try_require.js');
var assert = require('assert');

var moreDotLessDash = tryRequire('../problems/1_more_dot_less_dash.js');
var isSorted = tryRequire('../problems/2_is_sorted.js');
var toFeet = tryRequire('../problems/3_to_feet.js');
var smallestPrime = tryRequire('../problems/4_smallest_prime.js');

describe('moreDotLessDash()', function () {
  it('should return boolean true if there are more dots than dashes in the given string, false otherwise', function () {
    assert.equal(moreDotLessDash('2-D arrays are fun. I think.'), true);
    assert.equal(moreDotLessDash('.-.-.'), true);
    assert.equal(moreDotLessDash('.-'), false);
    assert.equal(moreDotLessDash('..--'), false);
  });
});


describe('isSorted()', function () {
  it('should return boolean true if numbers in array are in increasing order, false otherwise', function () {
    assert.equal(isSorted([3, 5, 11, 9, 15, 16]), false);
    assert.equal(isSorted([3, 5, 11, 13, 15, 16]), true);
    assert.equal(isSorted([9, 4, 1, 5, 6, 2]), false);
    assert.equal(isSorted([1, 2, 4, 5, 6, 9]), true);
  });
});


describe('toFeet()', function () {
  it('should return an array of distances all in feet', function () {
    var arr1 = ['10 feet', '3 yards', '5 yards', '3 feet'];
    var result1 = [ '10 feet', '9 feet', '15 feet', '3 feet' ];
    var arr2 = ['2 yards', '3 feet', '10 yards'];
    var result2 = [ '6 feet', '3 feet', '30 feet' ];

    assert.deepEqual(toFeet(arr1), result1);
    assert.deepEqual(toFeet(arr2), result2);
  });
});


describe('smallestPrime()', function () {
  it('should return the smallest prime number in the given array', function () {
    var arr1 = [ 6, 7, 12, 11, 5, 4 ];
    var arr2 = [11, -7, 7, 8, 6, 10];

    assert.equal(smallestPrime(arr1), 5);
    assert.equal(smallestPrime(arr2), 7);
  });

  it('should return null if there are no primes', function () {
    var arr3 = [];
    var arr4 = [4, 6, 8, 10];

    assert.strictEqual(smallestPrime(arr3), null);
    assert.strictEqual(smallestPrime(arr4), null);
  });
});
