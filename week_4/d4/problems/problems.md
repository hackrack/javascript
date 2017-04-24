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
// longestBigram("his last assessment is fun"); // => 'last assessment'
```

### maxAdjacentSum

```js
// Write a function `maxAdjacentSum(array)` that takes in an array of numbers
// and returns the maximum sum of adjacent numbers in the array.
//
// HINT: First think how we can find adjacent elements in an array!
//
// Examples:
//
// var arr1 = [5, 6, 11, 3];
// maxAdjacentSum(arr1); // => 17
//
// var arr2 = [3, 2, 13, 5, 4, 7];
// maxAdjacentSum(arr2); // => 17
```

### opposingSums

```js
// Write a function `opposingSums(array)` that takes in an array of numbers and returns
// a new array containing half the number of elements. Assume the `array` contains
// an even number of elements.
//
// The first element of the new array should be the sum between the 1st and
// last element of the original `array`. The second element of the new array
// should be the sum between the 2nd and 2nd to last element. The third element
// of the new array should be the sum between the 3rd and 3rd to last element
// ... etc.
//
// Examples:
//
// var arr1 = [3, 2, 11, 4, 7, 9];
// opposingSums(arr1); // => [ 12, 9, 15 ]
//
// var arr2 = [1, 2, 3, 4]
// opposingSums(arr2); // => [ 5, 5 ]
```
