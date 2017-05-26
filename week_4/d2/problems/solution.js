function safeSpeedChange(speeds) {

  for (var i = 0; i < speeds.length - 1; i += 1) {
    var diff = speeds[i + 1] - speeds[i];

    if (Math.abs(diff) > 5) {
      return false;
    }
  }

  return true;
}

function isUniqueAnagram(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }

  for (var i = 0; i < word1.length; i += 1) {
    var char = word1[i];

    if (word2.indexOf(char) === -1) {
      return false;
    }
  }

  return true;
}

function shiftChars(word, num) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var shifted = '';

  for (var i = 0; i < word.length; i += 1) {
    var char = word[i];
    var index = alphabet.indexOf(char);
    var newIndex = (index + num) % 26;

    shifted += alphabet[newIndex];
  }

  return shifted;
}

function uncompressString(str) {
  var newStr = '';

  for (var i = 0; i < str.length - 1; i += 2) {
    var char = str[i];
    var num = Number(str[i + 1]);

    for (var j = 0; j < num; j += 1) {
      newStr += char;
    }
  }

  return newStr;
}


function fibonacci(n) {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [1];
  }

  var seq = [1, 1];

  for (var i = 2; i < n; i += 1) {
    var last = seq[seq.length - 1];
    var secondLast = seq[seq.length - 2];
    var next = last + secondLast;

    seq.push(next);
  }

  return seq;
}

function nextFibonacci(seq) {
  return seq[seq.length-1] + seq[seq.length -2];
}

function fibonacci2(n) {
  var seq = [1, 1];

  while (seq.length < n) {
    seq.push(nextFibonacci(seq));
  }

  return seq.slice(0, n);
}

function handScore(string) {
  var value = {
    'J': 1,
    'Q': 2,
    'K': 3
  }

  var score = 0;

  for (var i = 0; i < string.length; i += 1) {
    var card = string[i];
    
    score += value[card];
  }

  return score;
}


function winningHand(hand1, hand2) {
  var score1 = handScore(hand1);
  var score2 = handScore(hand2);

  if (score1 > score2) {
    return hand1;
  } else if (score2 > score1) {
    return hand2;
  } else {
    return 'DRAW';
  }
}
