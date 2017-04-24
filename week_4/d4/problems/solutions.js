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
