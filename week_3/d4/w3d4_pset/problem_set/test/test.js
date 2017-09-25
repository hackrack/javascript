/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***************/

var tryRequire = require('../utils/try_require.js');
var assert = require('assert');

var oddWordsOut = tryRequire('../problems/1_odd_words_out.js');
var hasAllVowels = tryRequire('../problems/2_has_all_vowels.js');
var favoriteWord = tryRequire('../problems/3_favorite_word.js');
var mindPsAndQs = tryRequire('../problems/4_mind_ps_and_qs.js');
var commonFactors = tryRequire('../problems/5_common_factors.js');
var commonPrimeFactors = tryRequire('../problems/6_common_prime_factors.js');

describe('oddWordsOut()', function () {
  it('should return a string where any word of odd length is removed', function () {
    assert.equal(oddWordsOut('go to the store and buy milk'), 'go to milk');
    assert.equal(oddWordsOut('what is the answer'), 'what is answer');
  });
});

describe('hasAllVowels()', function () {
  it('should return a boolean true if a string has all vowels present, false otherwise', function () {
    assert.equal(hasAllVowels('have you gone biking?'), true);
    assert.equal(hasAllVowels('get out of the way, silly'), true);
    assert.equal(hasAllVowels('bootcamp prep'), false);
    assert.equal(hasAllVowels('hello world'), false);
  });
});


describe('favoriteWord()', function () {
  it('should return the word where favoriteLetter appears most', function () {
    var str = 'sinful caesar sipped his snifter';

    assert.equal(favoriteWord('p', str), 'sipped');
    assert.equal(favoriteWord('a', str), 'caesar');
    assert.equal(favoriteWord('s', str), 'sinful');
    assert.equal(favoriteWord('x', str), '');
  });
});


describe('mindPsAndQs()', function () {
  it('should return the length of the longest streak of P\'s and Q\'s', function () {
    assert.equal(mindPsAndQs('BOOTCAMP'), 1);
    assert.equal(mindPsAndQs('APCDQQPPC'), 4);
    assert.equal(mindPsAndQs('PQPQ'), 4);
    assert.equal(mindPsAndQs('PPPXQPPPQ'), 5);
  });
});


describe('commonFactors()', function () {
  it('should return an array of common factors between both numbers', function () {
    assert.deepEqual(commonFactors(12, 50), [ 1, 2 ]);
    assert.deepEqual(commonFactors(6, 24), [ 1, 2, 3, 6 ]);
    assert.deepEqual(commonFactors(11, 22), [ 1, 11 ]);
    assert.deepEqual(commonFactors(45, 60), [ 1, 3, 5, 15 ]);
  });
});


describe('commonPrimeFactors()', function () {
  it('should return an array of prime common factors between both numbers', function () {
    assert.deepEqual(commonPrimeFactors(12, 50), [ 2 ]);
    assert.deepEqual(commonPrimeFactors(6, 24), [ 2, 3 ]);
    assert.deepEqual(commonPrimeFactors(11, 22), [ 11 ]);
    assert.deepEqual(commonPrimeFactors(45, 60), [ 3, 5 ]);
  });
});
