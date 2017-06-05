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
