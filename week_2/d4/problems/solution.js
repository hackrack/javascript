function capVowels(string) {
  var vowels = 'aeiouAEIOU'.split('');
  var newStr= '';

  for (var i = 0; i < string.length; i += 1) {
    var char = string[i];

    if (vowels.indexOf(char) > -1) {
      newStr += char.toUpperCase();
    } else {
      newStr += char.toLowerCase();
    }
  }

  return newStr;
}

function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (var i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}


function nextTwoPrimes(num) {
  var primes = [];

  for (var i = num + 1; primes.length < 2; i += 1) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
}


function pairProduct(arr, num) {
  var pairs = [];

  var i = 0;
  while (i < arr.length) {

    var j = i + 1;
    while (j < arr.length) {
      if (arr[i] * arr[j] === num) {
        pairs.push([i, j]);
      }

      j += 1;
    }

    i += 1;
  }

  return pairs;
}

function twoDimensionalSize(array) {
  var size = 0;

  for (var i = 0; i < array.length; i += 1) {
    var subArray = array[i];
    size += subArray.length;
  }

  return size;
}

function elementCount(array) {
  var countObj = {};

  for (var i = 0; i < array.length; i++) {
    var key = array[i];

    if (countObj[key] === undefined) {
      countObj[key] = 1;
    } else {
      countObj[key]++;
    }
  }

  return countObj;
}


function removePunctuation(word) {
  var punctuation = [";", "!", ".", "?", ",", "-"];
  var lastChar = word[word.length - 1];

  if (punctuation.indexOf(lastChar) !== -1) {
    return word.slice(0, -1);
  } else {
    return word;
  }
}

function isStopWord(word, stopWords) {
  var noPuncWord = removePunctuation(word);

  return stopWords.indexOf(noPuncWord) !== -1;
}

function titleize(title, stopWords) {
  var words = title.split(" ");
  var goodTitle = [];

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i].toLowerCase();

    if (isStopWord(word, stopWords)) {
      goodTitle.push(word);
    } else {
      word = word[0].toUpperCase() + word.slice(1);
      goodTitle.push(word);
    }
  }

  return goodTitle.join(" ");
}
