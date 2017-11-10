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

  var lastChar = string[string.length - 1];
  var rest = string.slice(0, -1);
  var reversed = lastChar + reverseString(rest);
  return reversed;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = reverseString;
