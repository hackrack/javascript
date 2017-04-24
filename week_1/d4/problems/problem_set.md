## Arrays

### logEach

```js
// Write a function `logEach(array)` that prints every element of the array and its
// index to the console.
//
// Example:
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
// capWords(['hello', 'boOtCaMp', 'PREP!']); // => ['HELLO', 'BOOTCAMP', 'PREP!']
```

### maxValue

```js
// Write a function `maxValue(array)` that returns the largest value in `array`.
// Assume `array` is an array of numbers.
//
// Examples:
// maxValue([12, 6, 43, 2]); // => 43
// maxValue([]); // => null
// maxValue([-4, -10, 0.43]); // => 0.43
```

## Decomposing With Functions

In these exercises we will be practicing decomposition by building multiple functions.
Be sure to test each function thoroughly as you go before moving on to the next
problem. Each function will require the previous to solve.

### isPrime

```js
// Write a function `isPrime(number)` that returns a boolean indicating if `number`
// is prime or not. Assume `number` is a positive integer.
//
// Examples:
// isPrime(2); // => true
// isPrime(1693); // => true
// isPrime(15); // => false
// isPrime(303212); // => false
```

### firstNPrimes

```js
// Using the `isPrime` function you made, write a function `firstNPrimes(n)` that
// returns an array of the first `n` prime numbers.
//
// Examples:
// firstNPrimes(0); // => []
// firstNPrimes(1); // => [2]
// firstNPrimes(4); // => [2, 3, 5, 7]
```

### sumOfNPrimes

```js
// Using `firstNPrimes`, write a function `sumOfNPrimes(n)` that returns the sum of
// the first `n` prime numbers.
//
// Examples:
// sumOfNPrimes(0); // => 0
// sumOfNPrimes(1); // => 2
// sumOfNPrimes(4); // => 17
```
