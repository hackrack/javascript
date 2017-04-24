### objectSelect

```js
// Write a function objectSelect(obj, cb) which takes as
// arguments an object and a callback, and returns a new
// object where all the key value pairs return true,
// when passed into the callback.
//
// Example:
//
// var obj = {
//   one: "one",
//   two: "something else",
//   three: "three",
//   four: "another thing."
// };
//
// function isEqual(a, b) {
//   return a === b;
// }
//
// var matchingPairs = objectSelect(obj, isEqual);
//
// matchingPairs; //=> {
//   one: "one",
//   three: "three"
// }
```

### splitHalfArray

```js
// Write a function splitHalfArray(array) that takes in
// an array as an argument and returns two halves of that
// array split in the middle.
// If the array has an odd number of elements, then the middle
// element should be excluded.
//
// Example:
//
// splitHalfArray([1, 2, 3, 4, 5]); // => [ [ 1, 2 ], [ 4, 5 ] ]
// splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']); // => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]
```

### threeUniqueVowels

```js
// Write a function threeUniqueVowels(string) that takes in a string and returns true
// if the string contains at least three different vowels.
// Vowels are a, e, i, o, u
//
// Examples:
//
// threeUniqueVowels('delicious'); // => true
// threeUniqueVowels('bootcamp prep'); // => true
// threeUniqueVowels('bootcamp'); // => false
// threeUniqueVowels('dog'); // => false
// threeUniqueVowels('go home'); // => false
```

### vowelShift

```js
// Write a function vowelShift(sentence) that takes in a sentence string.
// The function should return a new sentence, where every vowel is replaced
// with the next vowel in the alphabet.
//
// var vowels = ['a', 'e', 'i', 'o', 'u'];
//
// Examples:
//
// vowelShift('bootcamp'); // => 'buutcemp'
// vowelShift('hello world'); // => 'hillu wurld'
// vowelShift('on the hunt'); // => 'un thi hant'
```
