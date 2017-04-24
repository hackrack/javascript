### safeSpeedChange

```js
// Write a function safeSpeedChange(speeds) that takes in an array of speed numbers.
// The function should return true if consecutive speeds in the array differ
// by no more than 5, false otherwise.
//
// Examples:
//
// safeSpeedChange([3, 3, 2, 6, 8, 7]); //=> true
// safeSpeedChange([3, 3, 2, 6, 12, 10]); // => false
// safeSpeedChange([8, 10, 4, 3, 2]); // => false
```

### isUniqueAnagram

```js
// Write a function isUniqueAnagram(word1, word2) that
// takes in two strings. The function should return true
// if the strings are anagrams of each other, false otherwise.
// Anagrams are strings that contain the same characters,
// but not necessarily in the same order. Assume there
// will be no repeated characters in each input string.
//
// Examples:
//
// isUniqueAnagram('iceman', 'cinema'); // => true
// isUniqueAnagram('abcd', 'adcb'); // => true
// isUniqueAnagram('abcd', 'adxb'); // => false
// isUniqueAnagram('abcd', 'abcdx'); // => false
```

### shiftChars

```js
// Write a function shiftChars(word, num) that takes in a
// lowercase string and a number.
// The function should return a string where every character
// of the word is shifted `num` times in the alphabet.
//
// Use this alphabet array to help:
//
// var alphabet = [
//   'a','b','c','d','e','f','g','h','i','j','k','l','m',
//   'n','o','p','q','r','s','t','u','v','w','x','y','z'
// ];
//
// Examples:
//
// shiftChars('able', 1); // => 'bcmf'
// shiftChars('apple', 2); //=> 'crrng'
// shiftChars('bootcamp', 3); //=> 'errwfdps'
// shiftChars('zebra', 5); //=> 'ejgwf'
```

### uncompressString

```js
// Write a function `uncompressString(str)` that takes in a "compressed" string and
// returns the "uncompressed" version of the string. See the examples.
//
// HINT: Use the built-in `Number` function to turn the string representation of
// a number into a number
// Number('42'); // => 42;
//
// Examples:
//
// uncompressString('a2b4c1'); // => 'aabbbbc'
// uncompressString('b1o2t1'); // => 'boot'
// uncompressString('x3y1x2z4'); // => 'xxxyxxzzzz'
```


### fibonacci

```js
// Write a function fibonacci(n) that takes in a number that
// represents the length of a sequence. The function should
// should return the first `n` numbers in the fibonacci sequence.
//
// The first two numbers of the fibonacci sequence are 1 and 1.
// The next number in the sequence can be found by adding the
// last two numbers in the sequence.
//
// Examples:
//
// fibonacci(0); // => []
// fibonacci(1); // => [ 1 ]
// fibonacci(2); // => [ 1, 1 ]
// fibonacci(3); // => [ 1, 1, 2 ]
// fibonacci(5); // => [ 1, 1, 2, 3, 5 ]
// fibonacci(10); // => [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
```

### winningHand

```js
// Write a function winningHand(hand1, hand2) that takes in
// two strings representing a hand of 4 cards. Return
// the string of the hand with the higher total score. If there
// is a tie, return 'DRAW'. Possible cards are J, Q, K.
//
// J = 1 point
// Q = 2 points
// K = 3 points
//
// Examples:
//
// winningHand('JQKJ', 'QQJJ'); // => 'JQKJ'
// winningHand('KJKJ', 'QQQK'); // => 'QQQK'
// winningHand('JKJJ', 'QQJJ'); // => 'DRAW'
// winningHand('KJKJ', 'QQQQ'); // => 'DRAW'
```
