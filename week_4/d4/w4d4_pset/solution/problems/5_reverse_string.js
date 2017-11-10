/***********************************************************************
Write a function `reverseString(string)` that takes in a string as a parameter
and returns the string reversed. Do this recursively. You should not use
the array.reverse method.

Examples

reverseString('bootcamp'); // => 'pmactoob'
reverseString('app academy'); // => 'ymedaca ppa'
reverseString(''); // => ''
***********************************************************************/

function reverseString(string) {
  if (string === '') {
    return '';
  }

  var firstChar = string[0];
  var rest = string.slice(1);
  var reversed = reverseString(rest) + firstChar;
  return reversed;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = reverseString;
