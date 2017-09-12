## Problem Set

Here are is a problem set of generic programming problems that can be solved in
either JavaScript or Ruby. It's actually the case that any problem you did in Bootcamp
Prep can be translated into Ruby. Some of the following problems should be familiar,
as they were part of the curriculum.

Compare each of the JS problems to their Ruby equivalent.

### longestBigram

```js
// Write a function `longestBigram(sentence)` that takes in a sentence string and returns
// the longest bigram in the sentence. A bigram is a pair of consecutive words.
// When returning the bigram, include the space between the words.
// Assume there will be no punctuation. In the case of a tie, return the earlier bigram.
//
// Examples:
//
// longestBigram('measure twice cut once'); // => 'measure twice'
// longestBigram("One must have a mind of winter"); // => 'must have'
// longestBigram("go home to eat"); // => 'go home'

function longestBigram(sentence) {
  var words = sentence.split(' ');
  var longest = '';

  for (var i = 0; i < words.length - 1; i += 1) {
    var word1 = words[i];
    var word2 = words[i + 1];
    var bigram = word1 + ' ' + word2;

    if (bigram.length > longest.length) {
      longest = bigram;
    }
  }

  return longest;
}
```

```ruby
def longest_bigram(sentence)
  words = sentence.split
  longest_bigram = ''

  i = 0
  while i < words.length - 1
    current_word = words[i]
    next_word = words[i+1]

    if current_word.length + next_word.length > longest_bigram.length - 1
      longest_bigram = current_word + ' ' + next_word
    end

    i += 1
  end

  longest_bigram
end
```

### oddVowelFilter

```js
// Write a function oddVowelFilter(str) that takes in a string and returns a new string
// where vowels at odd indices are removed.
//
// Examples:
//
// oddVowelFilter('bootcamp') => 'botcmp'
// oddVowelFilter('app academy') => 'app academy'
// oddVowelFilter('build some apps') => 'bild sm pps'

// JavaScript
function oddVowelFilter(str) {
  var newStr = '';
  var vowels = 'aeiouAEIOU';

  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (!((vowels.indexOf(char) > -1) && (i % 2 === 1))) {
      newStr += char;
    }
  }

  return newStr;
}
```

```ruby
# Ruby
def odd_vowel_filter(str)
  vowels = 'aeiouAEIOU'
  new_str = ""
  i = 0

  while i < str.length
    char = str[i]

    if !(vowels.include?(char) && i.odd?)
      new_str << char
    end

    i += 1
  end

  new_str
end
```


### nearestLarger

```js
// Write a method, nearest_larger(arr, idx) which takes an array and an index.
// The method should return another index, j: this should satisfy:
//
// (a) arr[idx] < arr[j], AND (b) there is no j2 closer to idx than j where arr[idx] < arr[j2].
//
// In case of ties, choose the earliest (left-most) of the two indices. If no number in
// arr is larger than arr[idx], return null. (in Ruby `null` is `nil`)
//
// Examples:
//
// nearestLarger([2,3,4,8], 2) => 3
// nearestLarger([2, 6, 4, 8], 3) => null
// nearestLarger([2, 6, 9, 4, 8], 3) => 2

// JavaScript
function nearestLarger(arr, idx) {
  var bestDistance = arr.length;
  var bestI = null;
  var i = 0;

  while (i < arr.length) {
    var indexDistance = Math.abs(i - idx);

    if (arr[i] > arr[idx]) {
      if (indexDistance < bestDistance) {
        bestDistance = indexDistance;
        bestI = i;
      }
    }  

    i += 1;
  }

  return bestI;
}
```

```ruby
# Ruby
def nearest_larger(arr, idx)
  best_distance = arr.length
  best_i = nil

  i = 0
  while i < arr.length
    index_distance = (i - idx).abs

    if arr[i] > arr[idx]
      if index_distance < best_distance
        best_distance = index_distance
        best_i = i
      end

    end

    i += 1
  end

  return best_i
end
```

### bubbleSort

```js
// Write a method that, when given an array of integers, sorts that array using the
// "bubble sort" methodology and returns the array.
//
// Example:
//
// bubbleSort([2, 8, 5, 2, 6]) => [ 2, 2, 5, 6, 8 ]

// JavaScript
function bubbleSort(array) {
  var sorted = false;

  while(!sorted) {
    sorted = true;

    for (var i = 0; i < array.length - 1; i++) {  
      if (array[i] > array[i+1]) {
        var larger = arr[i];
        var smaller = arr[i+1];
        arr[i] = smaller;
        arr[i+1] = larger;
        sorted = false;
      }
    }
  }

  return array;
}
```

```ruby
# Ruby
def bubble_sort(arr)
  sorted = false

  while !sorted
    sorted = true

    i = 0
    while i < arr.length - 1

      if arr[i] > arr[i + 1]
        larger = arr[i]
        smaller = arr[i+1]
        arr[i] = smaller
        arr[i+1] = larger

        sorted = false
      end

      i += 1
    end
  end

  return arr
end
```
