function peakFinder(array) {
  var peaks = [];

  for (var i = 0; i < array.length; i += 1) {
    var point = array[i];
    var before = array[i - 1];
    var after = array[i + 1];

    if (i === 0 && point > after) {
        peaks.push(i);
    } else if ((i === array.length - 1) && (point > before)) {
        peaks.push(i);
    } else if ((point > before) && point > after) {
        peaks.push(i);
    }
  }

  return peaks;
}

function zipArray(arr1, arr2) {
  var zipped = [];

  for (var i = 0; i < arr1.length; i++) {
    var el1 = arr1[i];
    var el2 = arr2[i];
    var pair = [el1, el2];

    zipped.push(pair);
  }

  return zipped;
}

function twoDimensionalTotal(array) {
  var total = 0;

  for (var i = 0; i < array.length; i += 1) {
    for (var j = 0; j < array[i].length; j += 1) {
      total += array[i][j];
    }
  }

  return total;
}

function divisibleByThreePairSum(array) {
  var pairs = [];

  for (var i = 0; i < array.length; i += 1) {
    for (var j = i + 1; j < array.length; j += 1) {
      var sum = array[i] + array[j];

      if (sum % 3 === 0) {
        pairs.push([i, j]);
      }
    }
  }

  return pairs;
}
