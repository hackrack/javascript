var tryRequire = require('../utils/try_require.js');
var assert = require('assert');

var censor = tryRequire('../problems/1_censor.js');
var greatestMap = tryRequire('../problems/2_greatest_map.js');
var isogramMatcher = tryRequire('../problems/3_isogram_matcher.js');
var secondLargest = tryRequire('../problems/4_second_largest.js');


describe('censor()', function () {
  it('should return a string of censored curse words', function () {
    var str1 = "Darn you Harold you son of a gun";
    var curse1 = ["darn", "gun"];
    var str2 = "Schnikeys I dont give a diddly squat";
    var curse2 = ["schnikeys", "diddly", "squat"];
    var result1 = "D*rn you Harold you son of a g*n";
    var result2 = "Schn*k*ys I dont give a d*ddly sq**t";

    assert.equal(censor(str1, curse1), result1);
    assert.equal(censor(str2, curse2), result2);
  });
});


describe('greatestMap()', function () {
  it('should return an array where each element is the greatest value from two callbacks', function () {
    function squareRootRounder(num) {
      return Math.round(Math.sqrt(num));
    }

    function half(num) {
      return num / 2;
    }

    assert.deepEqual(greatestMap([1, 5, 10], squareRootRounder, half), [1, 2.5, 5]);
  });
});


describe('isogramMatcher()', function () {
  it('should return an array where the 1st number is the count of same letter in the same position and the 2nd number is the count of same letter in different positions of the words', function () {
    assert.deepEqual(isogramMatcher("an", "at"), [1, 0]);
    assert.deepEqual(isogramMatcher("or", "go"), [0, 1]);
    assert.deepEqual(isogramMatcher("cat", "tap"), [1, 1]);
    assert.deepEqual(isogramMatcher("home", "dome"), [3, 0]);
    assert.deepEqual(isogramMatcher("ultrasonic", "ostracized"), [3, 4]);
    assert.deepEqual(isogramMatcher("unpredictably", "hydromagnetic"), [1, 8]);
  });
});


describe('secondLargest()', function () {
  it('should return the second largest number in the array', function () {
    assert.equal(secondLargest([3, 1, 5, 4, 7]), 5);
    assert.equal(secondLargest([10, 7]), 7);
    assert.equal(secondLargest([10]), -1);
    assert.equal(secondLargest([]), -1);
  });
});
