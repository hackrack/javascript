/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***************/

var tryRequire = require('../utils/try_require.js');
var assert = require('assert');

var longWordCount = tryRequire('../problems/1_long_word_count.js');
var factorial = tryRequire('../problems/2_factorial.js');
var lcm = tryRequire('../problems/3_lcm.js');
var hipsterfy = tryRequire('../problems/4_hipsterfy.js');


describe('longWordCount()', function () {
  it('should return the number of words over 7 characters long', function () {
    assert.equal(longWordCount(""), 0);
    assert.equal(longWordCount("short words only"), 0);
    assert.equal(longWordCount("one reallylong word"), 1);
    assert.equal(longWordCount("two reallylong words inthisstring"), 2);
    assert.equal(longWordCount("allwordword longwordword wordswordword"), 3);
    assert.equal(longWordCount("seventy schfifty five"), 1);
  });
});


describe('factorial()', function () {
  it('should return the factorial of a number', function () {
    assert.equal(factorial(1), 1);
    assert.equal(factorial(4), 24);
    assert.equal(factorial(5), 120);
    assert.equal(factorial(10), 3628800);
  });
});


describe('lcm()', function () {
  it('should return the lowest common multiple of 2 numbers', function () {
    assert.equal(lcm(2, 3), 6);
    assert.equal(lcm(6, 10), 30);
    assert.equal(lcm(24, 26), 312);
  });
});


describe('hipsterfy()', function () {
  it('should return a string where every word has the last vowel removed', function () {
    assert.equal(hipsterfy("proper"), "propr");
    assert.equal(hipsterfy("proper tonic panther"), "propr tonc panthr");
    assert.equal(hipsterfy("towel flicker banana"), "towl flickr banan");
    assert.equal(hipsterfy("runner anaconda"), "runnr anacond");
    assert.equal(hipsterfy("turtle cheeseburger fries"), "turtl cheeseburgr fris");
  });
});
