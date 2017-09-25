/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***************/

var tryRequire = require('../utils/try_require.js');
var assert = require('assert');

var jump = tryRequire('../problems/1_debug_1.js');
var unique = tryRequire('../problems/2_debug_2.js');
var isHappyGroup = tryRequire('../problems/3_debug_3.js');
var isMagicNumer = tryRequire('../problems/4_debug_4.js');
var fizzBuzz = tryRequire('../problems/5_debug_5.js');
var capVowels = tryRequire('../problems/6_cap_vowels.js');
var nextTwoPrimes = tryRequire('../problems/7_next_two_primes.js');
var pairProduct = tryRequire('../problems/8_pair_product.js');
var twoDimensionalSize = tryRequire('../problems/9_two_dimensional_size.js');
var elementCount = tryRequire('../problems/10_element_count.js');
var titleize = tryRequire('../problems/11_titleize.js');

describe('debug1()', function () {
  it('should return a string indicating how high the person is jumping', function () {
    assert.equal(jump(5), "I'm jumping 5 feet high!");
    assert.equal(jump(12), "I'm jumping 12 feet high!");
  });
});


describe('debug2()', function () {
  it('should return an array of unique numbers', function () {
    var arr = unique([1,23,2,4,5,1,23]);
    var result = [1, 23, 2, 4, 5];

    assert.deepEqual(arr, result);
  });
});


describe('debug3()', function () {
  it('should return a boolean true if there are more than 5 happy people', function () {
    var people = [
      { happiness : 15},
      { happiness : 13},
      { happiness : 3},
      { happiness : 20},
      { happiness : 9},
      { happiness : 7},
      { happiness : 17},
      { happiness : 1}
    ];

    assert.equal(isHappyGroup(people), true);
  });
});


describe('debug4()', function () {
  it('should return a boolean true the number is a magic number', function () {
    assert.equal(isMagicNumer(26), true);
    assert.equal(isMagicNumer(50), false);
  });
});


describe('debug5()', function () {
  it('should return an array of numbers divisable by 3 and 5 but not both', function () {
    assert.deepEqual(fizzBuzz(19), [3, 5, 6, 9, 10, 12, 18]);
  });
});


describe('capVowels()', function () {
  it("should return string where all vowels are uppercase all others are lowercase", function () {
    var str1 = capVowels('hello world');
    var str2 = capVowels('HELLO WORLD');
    var str3 = capVowels('boOtCamP PreP');

    assert.equal(str1, 'hEllO wOrld');
    assert.equal(str2, 'hEllO wOrld');
    assert.equal(str3, 'bOOtcAmp prEp');
  });
});


describe('nextTwoPrimes()', function () {
  it('should return an array of the next two prime numbers', function () {
    assert.deepEqual(nextTwoPrimes(2), [ 3, 5 ]);
    assert.deepEqual(nextTwoPrimes(3), [ 5, 7 ]);
    assert.deepEqual(nextTwoPrimes(7), [ 11, 13 ]);
    assert.deepEqual(nextTwoPrimes(8), [ 11, 13 ]);
    assert.deepEqual(nextTwoPrimes(20), [ 23, 29 ]);
    assert.deepEqual(nextTwoPrimes(97), [ 101, 103 ]);
  });
});


describe('pairProduct()', function () {
  it('should return an two dimensional array of indices that multiply to num', function () {
    assert.deepEqual(pairProduct([1,2,3,4,5], 4), [ [ 0, 3 ] ]);
    assert.deepEqual(pairProduct([1,2,3,4,5], 8), [ [ 1, 3 ] ]);
    assert.deepEqual(pairProduct([1, 2, 3, 12, 8], 24), [ [ 1, 3 ], [ 2, 4 ] ]);
  });
});


describe('twoDimensionalSize()', function () {
  it('should return number that is the count of elements in the two dimensional array', function () {
    var arr1 = [
      [1, 2, 3],
      [4, 5],
      [6, 7, 8, 9]
    ];

    var arr2 = [
      ['a'],
      ['b', 'c', 'd', 'e']
    ];

    assert.equal(twoDimensionalSize(arr1), 9);
    assert.equal(twoDimensionalSize(arr2),  5);
  });
});


describe('elementCount()', function () {
  it('should return an object of how many times each element appears in the array', function () {
    var arr1 = ["a", "a", "b", "b"];
    var arr2 = ['c', 'a', 'c', 'a', 'b'];

    assert.deepEqual(elementCount(arr1), { "a" : 2, "b" : 2 });
    assert.deepEqual(elementCount(arr2), { "c": 2, "a": 2, "b": 1 });
  });
});


describe('titleize()', function () {
  it('should return a titleized version of the string', function () {
    var str1 = titleize("forest gump, the runner", ["the"]);
    var str2 = titleize("MASTER AND COMMANDER", ["and"]);
    var str3 = titleize("i LOVE; lover of mine", ["love", "of"]);
    var str4 = titleize("shall we dance?", ["dance"]);

    assert.equal(str1, "Forest Gump, the Runner");
    assert.equal(str2, "Master and Commander");
    assert.equal(str3, "I love; Lover of Mine");
    assert.equal(str4, "Shall We dance?");
  });
});
