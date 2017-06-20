function logEach(array) {
  for (var i = 0; i < array.length; i += 1) {
    console.log(i + ": " + array[i]);
  }
}


function printRange(start, end) {
  if (start > end) {
    return "Bad Range";
  }

  for (var i = start; i <= end; i += 1) {
    console.log(i);
  }
}


function range(start, end){
  var array = [];

  for(var i = start; i <= end; i += 1){
    array.push(i);
  }

  return array;
}

function sumArray(array) {
  var sum = 0;

  for (var i = 0; i < array.length; i += 1) {
    var num = array[i];
    sum += num;
  }

  return sum;
}


function capWords(words) {
  var newWords = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var cappedWord = word.toUpperCase();
    newWords.push(cappedWord);
  }

  return newWords;
}

function wordPeriods(sentence) {
  var words = sentence.split(' ');
  var newWords = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var newWord = word + '.';
    newWords.push(newWord);
  }

  var newSen = newWords.join(' ');
  return newSen;
}


function maxValue(numbers) {
  var largest = null;

  for (var i = 0; i < numbers.length; i += 1) {
    var num = numbers[i];

    if (largest === null || num > largest) {
      largest = num;
    }
  }

  return largest;
}
