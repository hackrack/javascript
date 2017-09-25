/***********************************************************************
Write a function `longestBigram(sentence)` that takes in a sentence
string and returns the longest bigram in the sentence. A bigram is a
pair of consecutive words.
When returning the bigram, include the space between the words. Assume
there will be no punctuation. In the case of a tie, return the earlier
bigram.

Examples:

longestBigram('measure twice cut once'); // => 'measure twice'
longestBigram("One must have a mind of winter"); // => 'must have'
longestBigram("go home to eat"); // => 'go home'
longestBigram("his last assessment is fun"); // => 'last assessment'
***********************************************************************/

function longestBigram(sentence) {
  var words = sentence.split(' ');
  var longest = '';

  for (var i = 0; i < words.length - 1; i += 1) {
    var word1 = words[i];
    var word2 = words[i + 1];
    var bigram = word1 + ' ' + word2;

    if (bigram.length > longest.length) {
      longest = bigram;
    }
  }

  return longest;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = longestBigram;
