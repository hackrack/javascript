function isInside(array, ele) {
  return array.indexOf(ele) > -1;
}


function reverseStr(str) {
  var reversed = '';

  for (var i = str.length - 1; i >= 0; i -= 1) {
    var char = str[i];
    reversed += char;
  }

  return reversed;
}


function luckySevens(max) {
  var nums = [];

  for (var i = 7; i <= max; i += 7) {
    if (i % 7 === 0) {
      nums.push(i);
    }
  }

  return nums;
}


function copyMachine(element, num) {
  var arr = [];

  for (var i = 0; i < num; i += 1) {
    arr.push(element);
  }

  return arr;
}


function everyOtherWord(sentence) {
  var words = sentence.split(' ');
  var arr = [];

  for (var i = 0; i < words.length; i += 2) {
    var word = words[i];
    arr.push(word);
  }

  return arr;
}


function wordYeller(sentence) {
  var yelledWords = [];

  var words = sentence.split(" ");
  var punctuation = ". , ! ? ; :".split(" "); // array of punctuation

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var lastCharacter = word.slice(-1);

    if (punctuation.indexOf(lastCharacter) !== -1) { // if word already has punctuation
      yelledWords.push(word);
    } else {                                         // else the word has no punctuation
      yelledWords.push(word + "!");
    }
  }

  return yelledWords.join(" ");
}
