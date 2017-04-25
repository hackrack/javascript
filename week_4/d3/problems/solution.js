function removeNthLetter(word, n) {
  return word.slice(0, n) + word.slice(n + 1);
}

function alternateCase(str) {
  var newStr = '';

  for (var i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i].toLowerCase();
    }
  }

  return newStr;
}

function stopWatch(totalSeconds) {
  var secCount = totalSeconds % 60;
  if (secCount < 10) {
    secCount = '0' + secCount;
  }

  var minCount = Math.floor(totalSeconds / 60) % 60;
  if (minCount < 10) {
    minCount = '0' + minCount;
  }

  var hourCount = Math.floor(totalSeconds / 3600);
  if (hourCount < 10) {
    hourCount = '0' + hourCount;
  }

  var timeStr = hourCount + ':' + minCount + ':' + secCount;
  return timeStr
}

function nickname(name) {
  var vowels = 'AEIOUaeiou'.split('');
  var vowelCount = 0;

  for (var i = 0; i < name.length; i += 1) {
    var char = name[i];

    if (vowels.indexOf(char) > -1) {
      vowelCount += 1;
      if (vowelCount === 2) {
        break;
      }
    }
  }

  var str = name.slice(0, i + 1).toUpperCase();
  return str.toUpperCase() + '-' + str.toUpperCase();
}

function tallyCount(arr) {
  var tally = {};

  for (var i = 0; i < arr.length; i++) {
    var s = arr[i];
    if (tally[s] === undefined) {
      tally[s] = 'I';
    } else {
      tally[s] += 'I';
    }
  }

  return tally;
}

function elementCount(array) {
  var countObj = {};

  for (var i = 0; i < array.length; i += 1) {
    var key = array[i];

    if (countObj[key] === undefined) {
      countObj[key] = 1;
    } else {
      countObj[key] += 1;
    }
  }

  return countObj;
}

function oddOnesOut(array) {
  var count = elementCount(array);
  var result = [];

  for (var ele in count) {
    if (count[ele] % 2 === 0) {
      result.push(ele);
    }
  }

  return result;
}
