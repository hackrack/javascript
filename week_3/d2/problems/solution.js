function countOfLetter(string, char) {
  var count = 0;

  for (var i = 0; i < string.length; i += 1) {
    if (string[i].toLowerCase() === char.toLowerCase()) {
      count += 1;
    }
  }

  return count;
}

function charCount(str) {
  var count = {};

  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (count[char] === undefined) {
      count[char] = 1;
    } else {
      count[char]++;
    }
  }

  return count;
}

function countRepeats(string) {
  var count = charCount(string);
  var numRepeats = 0;

  for (var char in count) {
    if (count[char] > 1) {
      numRepeats++;
    }
  }

  return numRepeats;
}

function pairsToString(arr) {
  var str = '';

  for (var i = 0; i < arr.length; i += 1) {
    var pair = arr[i];
    var char = pair[0];
    var num = pair[1];
    for (var j = 0; j < num; j += 1) {
      str += char;
    }
  }

  return str;
}
