/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***************/

var tryRequire = require('../utils/try_require.js');
var assert = require('assert');

var diffArrayLen = tryRequire('../problems/1_diff_array_len.js');
var mirrorArray = tryRequire('../problems/2_mirror_array.js');
var avgValue = tryRequire('../problems/3_avg_value.js');
var abbreviate = tryRequire('../problems/4_abbreviate.js');
var firstLastCap = tryRequire('../problems/5_first_last_cap.js');

describe('diffArrayLen()', function () {
  it('should return a boolean indicating the lengths of the arrays are the same', function () {
    var a1 = ['a', 'b', 'c'];
    var a2 = ['w', 'x', 'y'];
    var a3 = [1, 3, 7, 4];

    assert.equal(diffArrayLen(a1, a2), false);
    assert.equal(diffArrayLen(a1, a3), true);
  });
});


describe('mirrorArray()', function () {
  it('should return an array where the first half is the origional array and the second half is a mirror of the first half', function () {
    assert.deepEqual(mirrorArray([1, 2, 3]), [1, 2, 3, 3, 2, 1]);
    assert.deepEqual(mirrorArray(['a', 'b', 'c', 'd']), [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]);
  });
});


describe('avgValue()', function () {
  it('should return the average of an array of numbers', function () {
    assert.equal(avgValue([10, 20]), 15);
    assert.equal(avgValue([2, 3, 7]), 4);
    assert.equal(avgValue([100, 60, 64]), 74.66666666666667);
  });
});


describe('abbreviate()', function () {
  it('should remove vowels from a word longer than 4 characters', function () {
    assert.equal(abbreviate('bootcamp'), 'btcmp');
    assert.equal(abbreviate('programming'),  'prgrmmng');
    assert.equal(abbreviate('hello world'),  'hll wrld');
  });

  it('should not remove vowels from a word less than 4 characters', function () {
    assert.equal(abbreviate('prep'), 'prep');
    assert.equal(abbreviate('dog'),  'dog');
    assert.equal(abbreviate('how are you'), 'how are you');
  });

  it('should abbreviate some words in a sentence and not others', function () {
    assert.equal(abbreviate('bootcamp prep is fun'), 'btcmp prep is fun');
    assert.equal(abbreviate('programming is fantastic'),  'prgrmmng is fntstc');
  });
});


describe('firstLastCap()', function () {
  it('should capitalize the first and last character in each word', function () {
    assert.equal(firstLastCap('hello BOOTCAMP PrEp'), 'HellO BootcamP PreP');
    assert.equal(firstLastCap('what is on the radio'), 'WhaT IS ON ThE RadiO');
  });
});
