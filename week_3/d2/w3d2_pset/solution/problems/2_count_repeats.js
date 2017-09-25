/***********************************************************************
Write a function `countRepeats(string)` that takes in a string and
returns the number of letters that appear more than once in the string.
You may assume the string contains only lowercase letters. Count the
number of letters that repeat, not the number of times they repeat in
the string.

Examples:

countRepeats('alvin'); //=> 0
countRepeats('aaaalvin'); //=> 1
countRepeats('pops'); //=> 1
countRepeats('mississippi'); //=> 3
countRepeats('hellobootcampprep'); //=> 4
***********************************************************************/

function charCount(str) {
  var count = {};

  for (var i = 0; i < str.length; i += 1) {
    var char = str[i];

    if (count[char] === undefined) {
      count[char] = 1;
    } else {
      count[char] += 1;
    }
  }

  return count;
}

function countRepeats(string) {
  var count = charCount(string);
  var numRepeats = 0;

  for (var char in count) {
    if (count[char] > 1) {
      numRepeats += 1;
    }
  }

  return numRepeats;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countRepeats;
