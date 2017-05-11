function longWordCount(sentence) {
  var count = 0;
  var words = sentence.split(" ");

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];
    if (word.length > 7) {
      count += 1;
    }
  }

  return count;
}


function factorial(n) {
  var product = 1;

  for (var i = 1; i <= n; i += 1) {
    product *= i;
  }

  return product;
}


function lcm(num1, num2) {
  var i = num1;

  while (true) {
    if (i % num2 === 0 ) {
      return i;
    }
    i += num1;
  }
}


function hipsterfyWord(word) {
  var vowels = ["a","e","i","o","u"];

  for (var i = word.length - 1; i >= 0; i -= 1) {
    if (vowels.indexOf(word[i]) !== -1) {
      var hipsterWord = word.slice(0, i) + word.slice(i + 1);
      return hipsterWord;
    }
  }

  return word;
}

function hipsterfy(sentence) {
  var hipsterfiedWords = [];
  var words = sentence.split(" ");

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];
    hipsterfiedWords.push(hipsterfyWord(word));
  }

  var hipsterfiedSentence = hipsterfiedWords.join(" ");
  return hipsterfiedSentence;
}
