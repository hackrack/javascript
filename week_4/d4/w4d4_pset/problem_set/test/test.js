/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***************/

var tryRequire = require('../utils/try_require.js');
var assert = require('assert');

var longestBigram = tryRequire('../problems/1_longest_bigram.js');
var maxAdjacentSum = tryRequire('../problems/2_max_adjacent_sum.js');
var opposingSums = tryRequire('../problems/3_opposing_sums.js');
var additionSequence = tryRequire('../problems/4_addition_sequence.js');
var reverseString = tryRequire('../problems/5_reverse_string.js');
var flatten = tryRequire('../problems/6_flatten.js');

describe('longestBigram()', function () {
  it('should return the longest combination of 2 adjacent words', function () {
    var str1 = 'measure twice cut once';
    var str2 = 'One must have a mind of winter';
    var str3 = 'go home to eat';
    var str4 = 'his last assessment is fun';
    var str5 = 'Weddings are basically funerals with cake.';

    assert.equal(longestBigram(str1), 'measure twice');
    assert.equal(longestBigram(str2), 'must have');
    assert.equal(longestBigram(str3), 'go home');
    assert.equal(longestBigram(str4), 'last assessment');
    assert.equal(longestBigram(str5), 'basically funerals');
  });
});


describe('maxAdjacentSum()', function () {
  it('should return the largest sum of 2 adjacent numbers', function () {
    var arr1 = [5, 6, 11, 3];
    var arr2 = [3, 2, 13, 5, 4, 7];

    assert.equal(maxAdjacentSum(arr1), 17);
    assert.equal(maxAdjacentSum(arr2), 18);
  });
});


describe('opposingSums()', function () {
  it('should return an array of opposingSums sums', function () {
    var arr1 = [3, 2, 11, 4, 7, 9];
    var arr2 = [1, 2, 3, 4];

    assert.deepEqual(opposingSums(arr1), [ 12, 9, 15 ]);
    assert.deepEqual(opposingSums(arr2), [ 5, 5 ]);
  });
});


describe('additionSequence()', function () {
  it('should return an array where numbers of the original array are added to the numbers in the sequence.', function () {
    var arr1 = [3, 2, 5, 4, 2, 1, 10];
    var seq1 = [2, 4, 6];
    var result1 = [ 5, 6, 11, 6, 6, 7, 12 ];

    var arr2 = [1, 2, 3, 4, 5, 6, 7];
    var seq2 = [1, 2];
    var result2 = [ 2, 4, 4, 6, 6, 8, 8 ];

    assert.deepEqual(additionSequence(arr1, seq1), result1);
    assert.deepEqual(additionSequence(arr2, seq2), result2);
  });
});

describe('reverseString()', function () {
  it('should return the string reversed', function () {
    assert.equal(reverseString('bootcamp'), 'pmactoob');
    assert.equal(reverseString('app academy'), 'ymedaca ppa');
    assert.equal(reverseString(''), '');
  });
});


describe('flatten()', function () {
  it('should return a flat array', function () {
    var array1 = [1, 2, [[3, 4], [5, [6]]], [7, 8]];
    var result1 = [1, 2, 3, 4, 5, 6, 7, 8];

    var array2 = ['this', ['problem', 'is'], [['pretty', 'tough'], [[':)']]]];
    var result2 = ['this', 'problem', 'is', 'pretty', 'tough', ':)'];

    var array3 = 'base case';
    var result3 = ['base case'];

    assert.deepEqual(flatten(array1), result1);
    assert.deepEqual(flatten(array2), result2);
    assert.deepEqual(flatten(array3), result3);
  });
});
