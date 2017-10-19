/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***************/

var tryRequire = require('../utils/try_require.js');
var assert = require('assert');

var countOfLetter = tryRequire('../problems/6_count_of_letter.js');
var countRepeats = tryRequire('../problems/7_count_repeats.js');
var pairsToString = tryRequire('../problems/8_pairs_to_string.js');

describe('countOfLetter()', function () {
  it('should return the number of times char appears in the string', function () {
    assert.equal(countOfLetter('mississippi', 's'), 4);
    assert.equal(countOfLetter('MISSISSIPPI', 'p'), 2);
    assert.equal(countOfLetter('BOOTCAMP', 't'), 1);
  });
});


describe('countRepeats()', function () {
  it('should return the number of characters in the string that repeat', function () {
    assert.equal(countRepeats('alvin'), 0);
    assert.equal(countRepeats('aaaalvin'), 1);
    assert.equal(countRepeats('pops'), 1);
    assert.equal(countRepeats('mississippi'), 3);
    assert.equal(countRepeats('hellobootcampprep'), 4);
  });
});


describe('pairToString()', function () {
  it('should return a a string corresponding to the pairs', function () {
    var array1 = [
      ['a', 3],
      ['b', 1],
      ['c', 2]
    ];

    var array2 = [
      ['f', 1],
      ['o', 2],
      ['d', 1],
      ['!', 1]
    ];

    assert.equal(pairsToString(array1), 'aaabcc');
    assert.equal(pairsToString(array2), 'food!');
  });
});
