## Arrays

### logEach

```js
// Write a function `logEach(array)` that prints every element of the array and its
// index to the console.
//
// Example:
//
// logEach(["Anthony", "John", "Carson"]); // prints
// 0: Anthony
// 1: John
// 2: Carson
```

### range

```js
// Write a function range(start, end) that returns an array that contains all
// numbers between 'start' and 'end' in sequential order.
//
// Examples:
//
// range(1,4) => [1,2,3,4]
// range(4,2) => []
```

### sumArray

```js
// Write a function sumArray(array) that takes in an array of numbers are returns the
// total sum of them.
//
//
// Examples:
//
// sumArray([5, 6, 4]); // => 15
// sumArray([7, 3, 9, 11]); // => 30
```

### capWords

```js
// Write a function `capWords(words)` that takes in an array of words and
// returns a new array where every word is capitalized.
//
// Example:
//
// capWords(['hello', 'boOtCaMp', 'PREP!']); // => ['HELLO', 'BOOTCAMP', 'PREP!']
```

### wordPeriods

```js
// Write a function `wordPeriods(sentence)` that takes in a sentence and returns a new
// sentence where every word has period after it.
//
// Examples:
//
// wordPeriods('hello world'); // => 'hello. world.'
// wordPeriods('what is the weather today'); // => 'what. is. the. weather. today.'
```

### maxValue

```js
// Write a function `maxValue(array)` that returns the largest value in `array`.
// Assume `array` is an array of numbers.
//
// Examples:
//
// maxValue([12, 6, 43, 2]); // => 43
// maxValue([]); // => null
// maxValue([-4, -10, 0.43]); // => 0.43
```

### Array Muscle Memory

Practice typing the syntax for iterating through arrays. **Type each snippet 5 times each.**
Focus on proper style and indentation. Be sure to test your code by running it after
each repetition. You'll be surprised and also annoyed at what details you missed!
Learn from those typos.

```js
function printForwards(arr) {
  for (var i = 0; i < arr.length; i++) {
    var ele = arr[i];
    console.log(ele);
  }
}

var alphabet = ['a', 'b', 'c', 'd', 'e'];
printForwards(alphabet);
```

```js
function printBackwards(array) {
  for (var i = array.length - 1; i >= 0; i--) {
    var ele = array[i];
    console.log(ele);
  }
}

var names = ['kurstie', 'mike', 'alex', 'meagan'];
printBackwards(names);
```
