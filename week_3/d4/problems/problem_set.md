### oddWordsOut

```js
// Write a function oddWordsOut(sentence) that takes in a sentence string and returns
// the sentence where words with an odd number of characters are removed.
//
// Examples:
//
// oddWordsOut('go to the store and buy milk'); // => 'go to milk'
// oddWordsOut('what is the answer'); // => 'what is answer'
```

### hasAllVowels

```js
// Write a function `hasAllVowels(str)` that takes in a string and returns true if
// the string contains every vowel (a, e, i, o, u) and false otherwise.
//
// Examples:
//
// hasAllVowels('have you gone biking?'); // => true
// hasAllVowels('get out of the way, silly'); // => true
// hasAllVowels('bootcamp prep'); // => false
// hasAllVowels('hello world'); // => false
```

### favoriteWord

```js
// Write a function favoriteWord(favoriteLetter, sentence) that takes in a single letter
// and a sentence string. The function should return the word in the sentence that contains
// `favoriteLetter` the most. If there are ties, return the word that appears first
// in the sentence.
//
// Examples
//
// favoriteWord('p', 'sinful caesar sipped his snifter') // => 'sipped'
// favoriteWord('a', 'sinful caesar sipped his snifter') //=> 'caesar'
// favoriteWord('s', 'sinful caesar sipped his snifter') //=> 'sinful'
// favoriteWord('x', 'sinful caesar sipped his snifter') //=> ''
```

### mindPsAndQs

```js
// Write a function mindPsAndQs(str) that accepts a string of uppercase letters. The
// function should return the length of the longest consecutive streak of the letters
// 'P' and 'Q'.
//
// Hint: Use two variables. One to track the length of the current streak
// and another to track the length of the longest streak so far. Think of using
// a strategy similar to maxValue. This can also be solved using a single loop!
// Nested loops not needed!
//
// Examples:
//
// mindPsAndQs('BOOTCAMP'); // => 1
// mindPsAndQs('APCDQQPPC'); // => 4
// mindPsAndQs('PQPQ'); // => 4
// mindPsAndQs('PPPXQPPPQ'); // => 5
```

### commonFactors

```js
// Write a function commonFactors(num1, num2) that returns an array that contains
// the common factors for both numbers.
//
// Examples:
//
// commonFactors(12, 50); // => [ 1, 2 ]
// commonFactors(6, 24); // => [ 1, 2, 3, 6 ]
// commonFactors(11, 22); // => [ 1, 11 ]
// commonFactors(45, 60); // => [ 1, 3, 5, 15 ]
```

### commonPrimeFactors

```js
// Write a function `commonPrimeFactors` that takes in two numbers as arguments
// and returns an array of all prime factors that are common between the
// two numbers. A factor is a number that divides another number without
// resulting in a remainder.
//
// Examples:
//
// commonPrimeFactors(12, 50); // => [ 2 ]
// commonPrimeFactors(6, 24); // => [ 2, 3 ]
// commonPrimeFactors(11,22); // => [ 11 ]
// commonPrimeFactors(45, 60); // => [ 3, 5 ]
```
