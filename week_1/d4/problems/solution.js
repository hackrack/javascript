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

/******************************************************************************/

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (var i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function firstNPrimes(n) {
  var primes = [];
  var num = 2;

  while(primes.length < n) {
    if (isPrime(num)) {
      primes.push(num);
    }

    num += 1;
  }

  return primes;
}

function sumOfNPrimes(n) {
  var sum = 0;
  var primes = firstNPrimes(n);

  for (var i = 0;  i < primes.length; i += 1) {
    sum += primes[i];
  }

  return sum;
}
