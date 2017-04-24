function objectSize(obj) {
  var count = 0;

  for (var k in obj) {
    count += 1;
  }

  return count;
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
