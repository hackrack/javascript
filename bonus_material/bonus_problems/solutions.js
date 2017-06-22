function isVowel(char) {
  var vowels = 'aeiouAEIOU';
  return vowels.indexOf(char) > -1;
}

function pigLatinNonVowel(word) {
  for (var i = 0; i < word.length; i++) {
    var char = word[i];

    if (isVowel(char)) {
      var newWord = word.slice(i) + word.slice(0, i) + 'ay';
      return newWord;
    }
  }

  return word;
}

function pigLatinize(word) {
  if (isVowel(word[0])) {
    return word + 'yay';
  } else {
    return pigLatinNonVowel(word);
  }
}

function isCapitalized(word) {
  return word[0] === word[0].toUpperCase();
}

function inPigLatin(sentence) {
  var words = sentence.split(' ');
  var pigLatinWords = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var latinWord = pigLatinize(word);

    if (isCapitalized(word)) {
      var cappedWord = latinWord[0].toUpperCase() + latinWord.slice(1).toLowerCase();
      pigLatinWords.push(cappedWord);
    } else {
      pigLatinWords.push(latinWord);
    }
  }

  var newSen = pigLatinWords.join(' ');
  return newSen;
}

function () {
  
}
