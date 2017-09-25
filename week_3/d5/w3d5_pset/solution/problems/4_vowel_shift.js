/***********************************************************************
Write a function vowelShift(sentence) that takes in a sentence string.
The function should return a new sentence, where every vowel is replaced
with the next vowel in the alphabet.

var vowels = ['a', 'e', 'i', 'o', 'u'];

Examples:

vowelShift('bootcamp'); // => 'buutcemp'
vowelShift('hello world'); // => 'hillu wurld'
vowelShift('on the hunt'); // => 'un thi hant'
***********************************************************************/

// solution 1
function vowelShift(sentence) {
  var replace = {
    a: 'e',
    e: 'i',
    i: 'o',
    o: 'u',
    u: 'a'
  };

  var newSen = '';

  for (var i = 0; i < sentence.length; i += 1) {
    var char = sentence[i];

    if (replace[char] === undefined) {
      newSen += char;
    } else {
      newSen += replace[char];
    }
  }

  return newSen;
}


// solution 2
function vowelShift(sentence){
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var newSen = '';

  for (var i = 0; i < sentence.length; i += 1) {
    var char = sentence[i];
    var vowelIndex = vowels.indexOf(char);

    if (vowelIndex > -1) {
      var nextVowelIndex = (vowelIndex + 1) % 5;

      newSen += vowels[nextVowelIndex];
    } else {
      newSen += char;
    }
  }

  return newSen;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = vowelShift;
