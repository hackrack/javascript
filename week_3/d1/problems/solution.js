function objectSize(obj) {
  var count = 0;

  for (var k in obj) {
    count += 1;
  }

  return count;
}

function threeInARow(arr) {
  for (var i = 0; i < arr.length - 2; i++) {
    if (arr[i] === arr[i + 1] && arr[i] === arr[i + 2]) {
      return true;
    }
  }

  return false;
}


function threeIncreasing(arr) {
  for (var i = 0; i < arr.length - 2; i++) {
    var num1 = arr[i];
    var num2 = arr[i + 1];
    var num3 = arr[i + 2];
    if ((num1 + 1 === num2) && (num2 + 1 === num3)) {
      return true;
    }
  }

  return false;
}

function objectSize(obj) {
  return Object.keys(obj).length;
}

function power(base, exp) {
  var product = 1;

  for (var i = 0; i < exp; i += 1) {
    product *= base;
  }

  return product;
}

function reverb(word) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  for (var i = word.length - 1; i >= 0; i -= 1) {
    var char = word[i];

    if (vowels.indexOf(char) > -1) {
      var afterVowel = word.slice(i);
      return word + afterVowel;
    }
  }

  return word;
}
