function myForEach(array, cb) {
  for (var idx = 0; idx < array.length; idx += 1) {
    var el = array[idx];
    cb(el, idx, array);
  }
}


function mySelect(arr, cb) {
  var selected = [];

  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      selected.push(arr[i]);
    }
  }

  return selected;
}


function myMap(arr, cb) {
  var mapped = [];

  for (var i = 0; i < arr.length; i++) {
    mapped.push(cb(arr[i], i, arr));
  }

  return mapped;
}


function countAdjacentSums(arr, n) {
  var count = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] + arr[i + 1] === n) {
      count++;
    }
  }

  return count;
}


function oppositeSign(num1, num2) {
  if ((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)) {
    return true;
  } else {
    return false;
  }
}

function signFlipCount(numbers) {
  var count = 0;

  for (var i = 0; i < numbers.length - 1; i++) {
    if (oppositeSign(numbers[i], numbers[i + 1])) {
      count++;
    }
  }

  return count;
}

function signFlipCount(numbers) {
  var count = 0;

  for (var i = 0; i < numbers.length - 1; i++) {
    if ((numbers[i] * numbers[i + 1]) < 0) {
      count++;
    }
  }

  return count;
}


function powerSequence(base, length) {
  var seq = [base];

  while (seq.length < length) {
    var last = seq[seq.length - 1];
    var next = base * last;
    seq.push(next);
  }

  return seq;
}


function collapseString(str) {
  var collapsed = '';

  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    if (char !== collapsed[collapsed.length - 1]) {
      collapsed += char;
    }
  }

  return collapsed;
}
