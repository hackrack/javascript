/***********************************************************************
An isogram is a word with only unique, non-repeating letters. Given two
isograms of the same length, return an array with two numbers indicating
matches: the first number is the number of letters matched in both words
at the same position, and the second is the number of letters matched in
both words but not in the same position.

isogramMatcher("an", "at"); //=> [1, 0]
isogramMatcher("or", "go"); //=> [0, 1]
isogramMatcher("cat", "tap"); //=> [1, 1]
isogramMatcher("home", "dome"); //=> [3, 0]
isogramMatcher("ultrasonic", "ostracized"); //=> [3, 4]
isogramMatcher("unpredictably", "hydromagnetic"); //=> [1, 8]
***********************************************************************/

function isogramMatcher(string1, string2) {
  var lettersSamePos = 0;
  var lettersDiffPos = 0;

  for (var i = 0; i < string1.length; i += 1) {
    if (string1[i] === string2[i]) {
      lettersSamePos += 1;
    } else if (string2.indexOf(string1[i]) !== -1) {
      lettersDiffPos += 1;
    }
  }

  return [lettersSamePos, lettersDiffPos];
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = isogramMatcher;
