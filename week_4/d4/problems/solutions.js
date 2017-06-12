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

function longestBigram2(sentence) {
  var words = sentence.split(' ');
  var longest = { index: 0, length: 0 };

  for (var i = 0; i < words.length - 1; i += 1) {
    var length = words[i].length + words[i+1].length;

    if (length > longest.length) {
      longest.index = i;
      longest.length = length;
    }
  }

  return words[longest.index] + ' ' + words[longest.index + 1];
}

function maxAdjacentSum(array) {
  var largest = null;

  for (var i = 0; i < array.length - 1; i += 1) {
    var sum = array[i] + array[i + 1];

    if (largest === null || sum > largest) {
      largest = sum
    }
  }

  return largest;
}

function opposingSums(array) {
  var half = array.length / 2;
  var arr = [];

  for (var i = 0; i < half; i += 1) {
    var num1 = array[i];
    var num2 = array[array.length - 1 - i];
    var sum = num1 + num2;

    arr.push(sum);
  }

  return arr;
}

function additionSequence(array, sequence) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    var num = array[i];
    var offset = sequence[i % sequence.length];
    newArray.push(num + offset);
  }

  return newArray;
}
