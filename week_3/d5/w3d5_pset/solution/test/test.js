/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***************/

var tryRequire = require('../utils/try_require.js');
var assert = require('assert');

var objectSelect = tryRequire('../problems/1_object_select.js');
var splitHalfArray = tryRequire('../problems/2_split_half_array.js');
var threeUniqueVowels = tryRequire('../problems/3_three_unique_vowels.js');
var vowelShift = tryRequire('../problems/4_vowel_shift.js');

describe('objectSelect()', function () {
  it('should return an object of key-value pairs that the result of the callback is true', function () {
    var obj = {
      one: "one",
      two: "something else",
      three: "three",
      four: "another thing."
    };

    function isEqual(a, b) {
      return a === b;
    }

    var matchingPairs = objectSelect(obj, isEqual);

    var result = {
      one: "one",
      three: "three"
    };

    assert.deepEqual(matchingPairs, result);
  });
});


describe('splitHalfArray()', function () {
  it('should remove the middle element if the length is odd', function () {
    var arr1 = splitHalfArray([1, 2, 3, 4, 5]);
    var result1 = [ [ 1, 2 ], [ 4, 5 ] ];

    var arr2 = splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
    var result2 = [ [ 'a', 'b', 'c' ], [ 'e', 'f', 'g' ] ];

    assert.deepEqual(arr1, result1);
    assert.deepEqual(arr2, result2);
  });

  it('should split in half equally if length is even', function () {
    var arr1 = splitHalfArray([1, 2, 3, 4, 5, 6]);
    var result1 = [ [ 1, 2, 3 ], [ 4, 5, 6 ] ];

    var arr2 = splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']);
    var result2 = [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ];

    assert.deepEqual(arr1, result1);
    assert.deepEqual(arr2, result2);
  });
});


describe('threeUniqueVowels()', function () {
  it('should return a boolean true if a string has 3 unique vowels present, false otherwise', function () {
    assert.equal(threeUniqueVowels('delicious'), true);
    assert.equal(threeUniqueVowels('bootcamp prep'), true);
    assert.equal(threeUniqueVowels('bootcamp'), false);
    assert.equal(threeUniqueVowels('dog'), false);
    assert.equal(threeUniqueVowels('go home'), false);
  });
});


describe('vowelShift()', function () {
  it('should return a string where each vowel is replaced with the next vowel in the alphabet', function () {
    assert.equal(vowelShift('bootcamp'), 'buutcemp');
    assert.equal(vowelShift('hello world'), 'hillu wurld');
    assert.equal(vowelShift('on the hunt'), 'un thi hant');
  });
});
