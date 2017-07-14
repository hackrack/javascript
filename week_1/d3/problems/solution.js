function logBetween(lowNum, highNum) {
  for (var i = lowNum; i <= highNum; i += 1) {
    console.log(i);
  }
}

function logBetween(lowNum, highNum) {
  var i = lowNum;
  while (i <= highNum) {
    console.log(i);
    i++;
  }
}

function logBetweenStepper(min, max, step) {
  for (var i = min; i <= max; i += step) {
    console.log(i);
  }
}

function logBetweenStepper(min, max, step) {
  var i = min;
  while (i <= max) {
    console.log(i);
    i += step;
  }
}

function printFives1(max) {
  for (var i = 0; i < max; i += 1) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
}

function printFives1(max) {
  var i = 0;
  while (i < max) {
    if (i % 5 ===0) {
      console.log(i);
    }
    i++;
  }
}

function printFives2(max) {
  for (var i = 0; i < max; i += 5) {
    console.log(i);
  }
}

function printFives2(max) {
  var i = 0;
  while (i < max) {
    console.log(i);
    i += 5;
  }
}

function printReverse(min, max) {
  for (var i = max - 1; i > min; i -= 1) {
    console.log(i);
  }
}

function printReverse(min, max) {
  var i = max - 1;
  while (i > min) {
    console.log(i);
    i--;
  }
}

function sumNums(max) {
  var sum = 0;

  for (var i = 1; i <= max; i += 1) {
    sum += i;
  }

  return sum;
}

function sumNums(max) {
  var sum = 0;
  var i = 1;

  while (i <= max) {
    sum += i;
    i++;
  }

  return sum;
}

// For our mathematically inclined: https://math.stackexchange.com/questions/2260/proof-for-formula-for-sum-of-sequence-123-ldotsn
function sumNums2(n) {
  if (n <= 0) {
    return 0;
  } else {
    return (n * (n + 1))/ 2;
  }
}

function isFactorOf(number, factor) {
  return (number % factor === 0);
}

function fizzBuzz1(max) {
  for (var i = 0; i < max; i += 1) {

    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(i);
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i);
    }
  }
}

function fizzBuzz1(max) {
  var i = 0;
  while(i < max) {
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(i);
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i);
    }
    i++;
  }
}

function fizzBuzz2(max) {
  for (var i = 0; i < max; i += 1) {

    if (i % 3 === 0) {
      if (i % 5 !== 0) {
        console.log(i);
      }
    } else if (i % 5 === 0) {
      console.log(i);
    }
  }
}

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

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  var i = 2;
  while (i < number) {
    if (number % i === 0) {
      return false;
    }
    i++;
  }

  return true;
}

function isPrime2(number) {
  if (number < 2) {
    return false;
  }

  for (var i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
