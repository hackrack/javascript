function censorWord(word) {
  var vowels = ["a", "e", "i", "o", "u"];

  for (var i = 0; i < vowels.length; i += 1) {
    var vowel = vowels[i];
    word = word.split(vowel).join('*');
  }

  return word;
}

function censor(sentence, curseWords) {
  var words = sentence.split(' ');
  var newWords = [];

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];

    if (curseWords.indexOf(word.toLowerCase()) === -1) {
      newWords.push(word);
    } else {
      newWords.push(censorWord(word));
    }
  }

  return newWords.join(' ');
}

function isogramMatcher(string1, string2) {
  var lettersSamePos = 0;
  var lettersDiffPos = 0;

  for (var i = 0; i < string1.length; i++) {
    if (string1[i] === string2[i]) {
      lettersSamePos++;
    } else if (string2.indexOf(string1[i]) !== -1) {
      lettersDiffPos++;
    }
  }

  return [lettersSamePos, lettersDiffPos];
}
