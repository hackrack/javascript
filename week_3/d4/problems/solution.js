function oddWordsOut(sentence) {
  var words = sentence.split(' ');
  var newWords = [];

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];

    if (word.length % 2 === 0) {
      newWords.push(word);
    }
  }

  return newWords.join(' ');
}

function hasAllVowels(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  for (var i = 0; i < vowels.length; i += 1) {
    if (str.indexOf(vowels[i]) === -1) {
      return false;
    }
  }

  return true;
}

function letterCount(word, char) {
  var count = 0;

  for (var i = 0; i < word.length; i += 1) {
    if (word[i] === char) {
      count += 1;
    }
  }

  return count;
}

function favoriteWord(favoriteLetter, sentence) {
  var words = sentence.split(' ');
  var fave = '';

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];
    if (letterCount(fave, favoriteLetter) < letterCount(word, favoriteLetter)) {
      fave = word;
    }
  }

  return fave;
}

function mindPsAndQs(str) {
  var longestStreak = 0;
  var currentStreak = 0;

  for (var i = 0; i < str.length; i += 1) {
    var char = str[i];
    if (char === 'P' || char === 'Q') {
      currentStreak += 1;

      if (currentStreak > longestStreak) {
        longestStreak = currentStreak;
      }
    } else {
      currentStreak = 0;
    }
  }

  return longestStreak;
}

function commonFactors(num1, num2) {
  if (num1 < num2) {
    var max = num1;
  } else {
    var max = num2;
  }

  var factors = [];

  for (var i = 1; i <= max; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      factors.push(i);
    }
  }

  return factors;
}


function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function commonPrimeFactors(num1, num2) {
  var factors = commonFactors(num1, num2);
  var primeFactors = [];

  for (var i = 0; i < factors.length; i += 1) {
    var factor = factors[i];
    if (isPrime(factor)) {
      primeFactors.push(factor);
    }
  }

  return primeFactors;
}
