function isOdd(number) {
  return (number % 2 !== 0);
}

function isOdd(number) {
  if (number % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

function plusFive(number) {
  return number + 5;
}

function threeOrSeven(number) {
  return (number % 7 === 0) || (number % 3 === 0);
}

function threeOrSeven(number) {
  if ((number % 7 === 0) || (number % 3 === 0)) {
    return true;
  } else {
    return false;
  }
}

function hello(str) {
  console.log("Hello, " + str + ".");
}

function yell(str) {
  var yelledStr = str.toUpperCase() + "!!!";
  return yelledStr;
}

function whisper(str) {
  var whisperedStr = "..." + str.toLowerCase() + "...";
  return whisperedStr;
}

function isSubstring(searchString, subString) {
  var lowerSearchStr = searchString.toLowerCase();
  var lowerSubStr = subString.toLowerCase();

  return lowerSearchStr.indexOf(lowerSubStr) !== -1;
}

function isSubstring(searchString, subString) {
  var lowerSearchStr = searchString.toLowerCase();
  var lowerSubStr = subString.toLowerCase();

  if (lowerSearchStr.indexOf(lowerSubStr) > -1) {
    return true;
  } else {
    return false;
  }
}

function echo(str) {
  var firstEcho = str.toUpperCase();
  var lastEcho = str.toLowerCase();

  return firstEcho + " ... " + str + " ... " + lastEcho;
}

function isEven(number) {
  return !isOdd(number);
}

function averageOfFour(num1, num2, num3, num4) {
  return (num1 + num2 + num3 + num4) / 4;
}
