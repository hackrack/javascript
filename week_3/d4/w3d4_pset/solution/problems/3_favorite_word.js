/***********************************************************************
Write a function favoriteWord(favoriteLetter, sentence) that takes in a
single letter and a sentence string. The function should return the word
in the sentence that contains `favoriteLetter` the most. If there are
ties, return the word that appears first in the sentence.

Examples

favoriteWord('p', 'sinful caesar sipped his snifter') // => 'sipped'
favoriteWord('a', 'sinful caesar sipped his snifter') //=> 'caesar'
favoriteWord('s', 'sinful caesar sipped his snifter') //=> 'sinful'
favoriteWord('x', 'sinful caesar sipped his snifter') //=> ''
***********************************************************************/

function letterCount(word, char) {
  var count = 0;

  for (var i = 0; i < word.length; i += 1) {
    if (word[i] === char) {
      count += 1;
    }
  }

  return count;
}

function favoriteWord(favoriteLetter, sentence) {
  var words = sentence.split(' ');
  var fave = '';

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];
    if (letterCount(fave, favoriteLetter) < letterCount(word, favoriteLetter)) {
      fave = word;
    }
  }

  return fave;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = favoriteWord;
