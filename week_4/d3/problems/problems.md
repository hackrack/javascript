### greatestCommonFactor

```js
// Write a function greatestCommonFactor(num1, num2) that returns the greatest
// common factor between num1 and num2. This means that the function should return
// the largest number that divides both num1 and num2.
//
// Examples:
//
// greatestCommonFactor(6, 10); // => 2
// greatestCommonFactor(10, 15); // => 5
// greatestCommonFactor(4, 7); // => 1
// greatestCommonFactor(4, 8); // => 4
// greatestCommonFactor(45, 30); // => 15
```

### removeNthLetter

```js
// Write a function removeNthLetter(word, n) that takes in
// a string and an index `n`. The function should return
// that word with the character at index `n` removed.
//
// Examples:
//
// removeNthLetter('bootcamp', 0); // => 'ootcamp'
// removeNthLetter('bootcamp', 6); // => 'bootcap'
// removeNthLetter('bootcamp', 4); // => 'bootamp'
// removeNthLetter('computer', 3); // => 'comuter'
```

### alternateCase

```js
// Write a function alternateCase(str) that takes in a word and
// returns the word where the characters alternate between
// uppercase and lowercase.
//
// Examples:
//
// alternateCase('BOOTCAMPPREP'); // => 'BoOtCaMpPrEp'
// alternateCase('bOotCamPpREP'); // => 'BoOtCaMpPrEp'
// alternateCase('hello'); // => 'HeLlO'
```

### stopWatch

```js
// Write a function stopWatch(totalSeconds) that takes in a
// number of seconds. The function should return the time string based
// on that number of seconds. The time should be formatted in
// hours (H), minutes (M), and seconds(S) in the form HH:MM:SS.
//
// Hint: the seconds and minutes count of the time should never
// be greater than 59. How can we use modulo % to accomplish this?
//
// Examples:
//
// stopWatch(0); // => '00:00:00'
// stopWatch(4); // => '00:00:04'
// stopWatch(128); // => '00:02:08'
// stopWatch(1234); // => '00:20:34'
// stopWatch(3612); // => '01:00:12'
// stopWatch(7640); // => '02:07:20'
// stopWatch(86400); // => '24:00:00'
// stopWatch(86522); // => '24:02:02'
// stopWatch(99999); // => '27:46:39'
```

### nickname

```js
// Write a function nickname(name) that takes in a name string and returns a
// string representing their nickname.
// A nickname is the name up to the second vowel repeated twice. See the examples.
//
// Examples:
//
// nickname('manuel'); // => 'MANU-MANU'
// nickname('pikachu'); // => 'PIKA-PIKA'
// nickname('bootcamp'); // => 'BOO-BOO'
// nickname('bob'); // => 'BOB-BOB'
```

### tallyCount

```js
// Write a function tallyCount(array) that takes in an array of strings.
// The function should return an object containing a tally count of the strings
// in the array.
//
// Examples:
//
// var arr1 = ['cat', 'dog', 'cat', 'cat', 'fish', 'dog', 'squirrel']
// tallyCount(arr1); // => { cat: 'III', dog: 'II', fish: 'I', squirrel: 'I' }
//
// var arr2 = ['x', 'x', 'y', 'z', 'y', 'x']
// tallyCount(arr2); // => { x: 'III', y: 'II', z: 'I' }
```

### oddOnesOut

```js
// Write a function oddOnesOut(array) that takes in an array of
// strings and returns a new array array containing only elements
// that appeared an even number of times in the input array.
//
// Examples:
//
// var arr1 = ['a', 'b', 'b', 'c', 'd', 'c', 'c', 'd']
// oddOnesOut(arr1); // => [ 'b', 'd' ]
//
// var arr2 = ['fish', 'fish', 'dog', 'cat', 'dog', 'dog']
// oddOnesOut(arr2); // => [ 'fish' ]
```

### tripletSum

```js
// Write a function `tripletSum(array, sum)` that takes in an array of numbers (array)
// and a number (sum). The function should return an array containing unique
// triplets of numbers from the array that equal `sum` when added together. You can
// assume that the input array contains no repeated numbers.
//
// Example:
//
// var arr1 = [1, 3, 5, 2, 4];
// tripletSum(arr1, 8); // => [ [ 1, 3, 4 ], [ 1, 5, 2 ] ]
```

## Recursive Problems

Test yourself by redoing the `factorial`, `power`, and `fibonacci` problems from
the readings a few times on your own. Then give these new recursive problems a shot:

### countUp

```js
// Write a recursive function `countUp(num)` that takes in a number and prints all
// whole numbers from `num` to 10. It should print 'done!' upon reaching 10.
// Do this recursively, without loops. Reference the `countdown` example from the recursion notes.
//
// Hint: use `if (num === 10)...` as the base case
//
// Example:
//
// countUp(3); // prints:
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// done!
```

### countHalves

```js
// Write a recursive function `countHalves(n)` that takes in a number and prints
// n, n/2, n/4, n/8, n / 16, and so on. This process should stop once the result goes
// below 1. It should print `done!` upon going below 1.
//
// Hint: use `if(n < 1)...` as the base case
//
// Example:
//
// countHalves(20); // prints
// 20
// 10
// 5
// 2.5
// 1.25
// done!
//
//
// countHalves(100); // prints
// 100
// 50
// 25
// 12.5
// 6.25
// 3.125
// 1.5625
// done!
```

### recursiveMultiply

```js
// Write a recursive function `multiply(a, b)` that takes in two numbers and
// returns their product. Do this recursively, without loops. You may assume
// that `a` and `b` are nonnegative numbers.
//
// Hint 1: use `if (a === 0)` as the base case
// Hint 2: how can you frame a multiplication in terms of a repeated addition?
//
// Example:
//
// multiply(3, 5); // => 15
// multiply(6, 4); // => 24
// multiply(0, 100); // => 0
```
