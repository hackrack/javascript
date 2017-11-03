/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***************/

var tryRequire = require('../utils/try_require.js');
var assert = require('assert');

var greatestCommonFactor = tryRequire('../problems/1_greatest_common_factor.js');
var removeNthLetter = tryRequire('../problems/2_remove_nth_letter.js');
var alternateCase = tryRequire('../problems/3_alternate_case.js');
var stopWatch = tryRequire('../problems/4_stop_watch.js');
var nickname = tryRequire('../problems/5_nickname.js');
var tallyCount = tryRequire('../problems/6_tally_count.js');
var oddOnesOut = tryRequire('../problems/7_odd_ones_out.js');
var tripletSum = tryRequire('../problems/8_triplet_sum.js');
var factorial = tryRequire('../problems/9_factorial.js');
var power = tryRequire('../problems/10_power.js');
var fib = tryRequire('../problems/11_fib.js');
var countUp = tryRequire('../problems/12_count_up.js');
var countHalves = tryRequire('../problems/13_count_halves.js');
var multiply = tryRequire('../problems/14_multiply.js');

describe('greatestCommonFactor()', function () {
  it('should return the greatest common factor between num1 and num2', function () {
    assert.equal(greatestCommonFactor(6, 10), 2);
    assert.equal(greatestCommonFactor(10, 15), 5);
    assert.equal(greatestCommonFactor(4, 7), 1);
    assert.equal(greatestCommonFactor(4, 8), 4);
    assert.equal(greatestCommonFactor(45, 30), 15);
  });
});


describe('removeNthLetter()', function () {
  it('should return the given string with the nth letter removed', function () {
    assert.equal(removeNthLetter('bootcamp', 0), 'ootcamp');
    assert.equal(removeNthLetter('bootcamp', 6), 'bootcap');
    assert.equal(removeNthLetter('bootcamp', 4), 'bootamp');
    assert.equal(removeNthLetter('computer', 3), 'comuter');
  });
});


describe('alternateCase()', function () {
  it('should return a string case is alternated between letters', function () {
    assert.equal(alternateCase('BOOTCAMPPREP'), 'BoOtCaMpPrEp');
    assert.equal(alternateCase('bOotCamPpREP'), 'BoOtCaMpPrEp');
    assert.equal(alternateCase('hello'), 'HeLlO');
  });
});


describe('stopWatch()', function () {
  it('should return the converted time in HH:MM:SS format', function () {
    assert.equal(stopWatch(0), '00:00:00');
    assert.equal(stopWatch(4), '00:00:04');
    assert.equal(stopWatch(128), '00:02:08');
    assert.equal(stopWatch(1234), '00:20:34');
    assert.equal(stopWatch(3612), '01:00:12');
    assert.equal(stopWatch(7640), '02:07:20');
    assert.equal(stopWatch(86400), '24:00:00');
    assert.equal(stopWatch(86522), '24:02:02');
    assert.equal(stopWatch(99999), '27:46:39');
  });
});


describe('nickname()', function () {
  it('should return a nickname string', function () {
    assert.equal(nickname('manuel'), 'MANU-MANU');
    assert.equal(nickname('pikachu'), 'PIKA-PIKA');
    assert.equal(nickname('bootcamp'), 'BOO-BOO');
    assert.equal(nickname('bob'), 'BOB-BOB');
  });
});


describe('tallyCount()', function () {
  it('should return a tally object', function () {
    var arr1 = ['cat', 'dog', 'cat', 'cat', 'fish', 'dog', 'squirrel'];
    var obj1 = { cat: 'III', dog: 'II', fish: 'I', squirrel: 'I' };
    var arr2 = ['x', 'x', 'y', 'z', 'y', 'x'];
    var obj2 = { x: 'III', y: 'II', z: 'I' };

    assert.deepEqual(tallyCount(arr1), obj1);
    assert.deepEqual(tallyCount(arr2), obj2);
  });
});


describe('oddOnesOut()', function () {
  it('should return an array of elements that appear in the given array an even number of times', function () {
    var arr1 = ['a', 'b', 'b', 'c', 'd', 'c', 'c', 'd'];
    var arr2 = ['fish', 'fish', 'dog', 'cat', 'dog', 'dog'];

    assert.deepEqual(oddOnesOut(arr1), [ 'b', 'd' ]);
    assert.deepEqual(oddOnesOut(arr2), [ 'fish' ]);
  });
});


describe('tripletSum()', function () {
  it('should return a 2D array each group of 3 numbers that add to sum', function () {
    var arr1 = [1, 3, 5, 2, 4];

    assert.deepEqual(tripletSum(arr1, 8), [ [ 1, 3, 4 ], [ 1, 5, 2 ] ]);
    assert.deepEqual(tripletSum(arr1, 10), [ [ 1, 5, 4 ], [ 3, 5, 2 ] ]);
    assert.deepEqual(tripletSum(arr1, 11), [ [ 5, 2, 4 ] ]);
  });
});


describe('factorial()', function () {
  it('should return the factorial of n', function () {
    assert.equal(factorial(1), 1);
    assert.equal(factorial(4), 24);
    assert.equal(factorial(5), 120);
    assert.equal(factorial(10), 3628800);
  });
});


describe('power()', function () {
  it('should return base to the power of exp', function () {
    assert.equal(power(2, 5), 32);
    assert.equal(power(2, 10), 1024);
    assert.equal(power(9, 2), 81);
    assert.equal(power(9, 3), 729);
    assert.equal(power(11, 0), 1);
    assert.equal(power(11, 1), 11);
  });
});


describe('fib()', function () {
  it('should return the nth number of the fibonacci sequence', function () {
    assert.equal(fib(1), 1);
    assert.equal(fib(2), 1);
    assert.equal(fib(3), 2);
    assert.equal(fib(5), 5);
    assert.equal(fib(10), 55);
  });
});


describe('countUp()', function () {
  it('test this function manually', function () {
  });
});


describe('countHalves()', function () {
  it('test this function manually', function () {
  });
});


describe('multiply()', function () {
  it('should return the product of a and b', function () {
    assert.equal(multiply(3, 5), 15);
    assert.equal(multiply(6, 4), 24);
    assert.equal(multiply(0, 100), 0);
  });
});
