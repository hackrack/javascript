function diffArrayLen(arr1, arr2) {
  return arr1.length !== arr2.length;
}

function mirrorArray(array) {
  var newArray = [];

  for(var i = 0; i < array.length; i += 1) {
    var el = array[i];
    newArray.push(el);
  }

  for (var i = array.length - 1; i >= 0; i -= 1) {
    var el = array[i];
    newArray.push(el);
  }

  return newArray;
}

function mirrorArray2(array) {
  var newArray = array.slice(0, array.length);

  for (var i = array.length - 1; i >= 0; i -= 1) {
    var el = array[i];
    newArray.push(el);
  }

  return newArray;
}

function avgValue(array) {
  var total = 0;

  for (var i = 0; i < array.length; i += 1) {
    var num = array[i];
    total += num;
  }

  var avg = total / array.length;
  return avg;
}

function removeVowels(word) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var newWord = '';

  for (var i = 0; i < word.length; i += 1) {
    var char = word[i];
    if (vowels.indexOf(char) === -1) {
      newWord += char;
    }
  }

  return newWord;
}

function abbreviate(sentence) {
  var words = sentence.split(' ');
  var newWords = [];

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];

    if (word.length >= 5) {
      newWords.push(removeVowels(word));
    } else {
      newWords.push(word);
    }
  }

  var newSen = newWords.join(' ');
  return newSen;
}
