/***********************************************************************
Write a function called capVowels(string) that takes in a string and
returns the string where every vowel is capitalized. All other letters
should be lowercased.

Hint: Don't forget that strings are immutable!

Examples:

capVowels('hello world'); // => 'hEllO wOrld'
capVowels('HELLO WORLD'); // => 'hEllO wOrld'
capVowels('boOtCamP PreP'); // => 'bOOtcAmp prEp'
***********************************************************************/

function capVowels(string) {
  var vowels = 'aeiouAEIOU'.split('');
  var newStr= '';

  for (var i = 0; i < string.length; i += 1) {
    var char = string[i];

    if (vowels.indexOf(char) > -1) {
      newStr += char.toUpperCase();
    } else {
      newStr += char.toLowerCase();
    }
  }

  return newStr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = capVowels;
