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

function greatestMap(array, cb1, cb2) {
  var mapped = [];

  for (var i = 0; i < array.length; i += 1) {
    var result1 = cb1(array[i], i, array);
    var result2 = cb2(array[i], i, array);

    if (result1 > result2) {
      mapped.push(result1);
    } else {
      mapped.push(result2);
    }
  }

  return mapped;
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
