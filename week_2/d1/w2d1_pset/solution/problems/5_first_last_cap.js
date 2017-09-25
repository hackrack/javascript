/***********************************************************************
Write a function `firstLastCap(sentence)` that takes in a sentence and
returns a new sentence where the first and last letters of each word is
uppercase. All other characters should be lowercase.

Examples:

firstLastCap('hello BOOTCAMP PrEp'); // =>'HellO BootcamP PreP'
firstLastCap('what is on the radio'); // =>'WhaT IS ON ThE RadiO'
***********************************************************************/

function firstLastCap(sentence) {
  var words = sentence.split(' ');
  var newWords = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var firstChar = word[0].toUpperCase();
    var lastChar = word[word.length - 1].toUpperCase();
    var middleChars = word.slice(1, -1).toLowerCase()
    var newWord = firstChar + middleChars + lastChar;
    newWords.push(newWord);
  }

  return newWords.join(' ');
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = firstLastCap;
