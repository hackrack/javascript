/***********************************************************************
Write a function alternateCase(str) that takes in a word and returns the
word where the characters alternate between uppercase and lowercase.

Examples:

alternateCase('BOOTCAMPPREP'); // => 'BoOtCaMpPrEp'
alternateCase('bOotCamPpREP'); // => 'BoOtCaMpPrEp'
alternateCase('hello'); // => 'HeLlO'
***********************************************************************/

function alternateCase(str) {
  var newStr = '';

  for (var i = 0; i < str.length; i += 1) {
    if (i % 2 === 0) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i].toLowerCase();
    }
  }

  return newStr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = alternateCase;
