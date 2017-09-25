/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***************/

var tryRequire = require('../utils/try_require.js');
var assert = require('assert');

var objectSize = tryRequire('../problems/1_object_size.js');
var threeInARow = tryRequire('../problems/2_three_in_a_row.js');
var threeIncreasing = tryRequire('../problems/3_three_increasing.js');
var power = tryRequire('../problems/4_power.js');
var reverb = tryRequire('../problems/5_reverb.js');

describe('objectSize()', function () {
  it('should return the number of key-value pairs in the object', function () {
    var obj1 = {
      name: 'Fido',
      age: '4'
    };

    var obj2 = {
      name: 'App Academy',
      course: 'Bootcamp Prep',
      locations: ['SF', 'NY']
    };

    assert.equal(objectSize(obj1), 2);
    assert.equal(objectSize(obj2), 3);
  });
});


describe('threeInARow()', function () {
  it('should return a boolean true if three of the same number appear consecutively, false otherwise', function () {
    assert.equal(threeInARow([4, 3, 7, 7, 7, 13, 8]), true);
    assert.equal(threeInARow([10, 9, 20, 33, 3, 3]), false);
  });
});


describe('threeIncreasing()', function () {
  it('should return a boolean true if three consecutive numbers increase by one, false otherwise', function () {
    assert.equal(threeIncreasing([3, 2, 11, 12, 13, 2, 4]), true);
    assert.equal(threeIncreasing([7, 2, 4, 5, 2, 1, 6]), false);
  });
});


describe('power()', function () {
  it('should return a number that is base to the exp power', function () {
    assert.equal(power(2, 5), 32);
    assert.equal(power(2, 10), 1024);
    assert.equal(power(9, 2), 81);
    assert.equal(power(9, 3), 729);
    assert.equal(power(11, 0), 1);
    assert.equal(power(11, 1), 11);
  });
});


describe('reverb()', function () {
  it('should return a string where the everything after the last vowel is repeated', function () {
    assert.equal(reverb('running'), 'runninging');
    assert.equal(reverb('wild'), 'wildild');
    assert.equal(reverb('debugged'), 'debuggeded');
    assert.equal(reverb('my'), 'my');
  });
});
