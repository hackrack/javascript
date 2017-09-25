/***********************************************************************
Write a function `moreDotLessDash(str)` that takes in a string and
returns the true if the string contains more dots ('.') than dashes
('-'), false otherwise.

Examples:

moreDotLessDash('2-D arrays are fun. I think.'); // => true
moreDotLessDash('.-.-.'); // => true
moreDotLessDash('.-'); // => false
moreDotLessDash('..--'); // => false
***********************************************************************/

// solution 1
function moreDotLessDash(str) {
  var dotCount = 0;
  var dashCount = 0;

  for (var i = 0; i < str.length; i += 1) {
    var char = str[i];

    if (char === '.') {
      dotCount += 1;
    } else if (char === '-') {
      dashCount += 1;
    }
  }

  return (dotCount > dashCount);
}

// solution 2
function moreDotLessDash(str) {
  return str.split('.').length > str.split('-').length;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = moreDotLessDash;
