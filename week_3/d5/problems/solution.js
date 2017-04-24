function objectSelect(obj, callback) {
  var result = {};

  for (var key in obj) {
    var val = obj[key];
    if (callback(key, val)) {
      result[key] = val;
    }
  }

  return result;
}

function splitHalfArray(array) {
  var midIndex = Math.floor(array.length / 2);

  if (array.length % 2 === 0) {
    return [array.slice(0, midIndex), array.slice(midIndex)];
  } else {
    return [array.slice(0, midIndex), array.slice(midIndex + 1)];
  }
}

function threeUniqueVowels(string) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var count = 0;

  for (var i = 0; i < vowels.length; i += 1) {
    var vowel = vowels[i];
    if (string.indexOf(vowel) > -1) {
      count += 1;
    }
  }

  return (count >= 3);
}

function vowelShift(sentence) {
  var replace = {
    a: 'e',
    e: 'i',
    i: 'o',
    o: 'u',
    u: 'a'
  };

  var newSen = '';

  for (var i = 0; i < sentence.length; i += 1) {
    var char = sentence[i];

    if (replace[char] === undefined) {
      newSen += char;
    } else {
      newSen += replace[char];
    }
  }

  return newSen;
}


function vowelShift(sentence){
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var newSen = '';

  for (var i = 0; i < sentence.length; i += 1) {
    var char = sentence[i];
    var vowelIndex = vowels.indexOf(char);

    if (vowelIndex > -1) {
      var nextVowelIndex = (vowelIndex + 1) % 5;
      newSen += vowels[nextVowelIndex];
    } else {
      newSen += char;
    }
  }

  return newSen;
}
