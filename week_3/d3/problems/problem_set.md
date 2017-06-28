### myForEach

```js
// Write a function `myForEach(arr, cb)` that accepts an array and a callback.
// It should call the `cb` for every element of the array, passing the element, its
// corresponding index, and the array itself to the callback. Do not use the built-in
// `Array.prototype.forEach` method. The return value is irrelevant.
//
// Examples:
//
// function printInfo(ele, i, arr) {
//   console.log(ele, "is at position", i, "in array", arr);
// }
//
// myForEach(['a', 'b', 'c'], printInfo); // prints
// a is at position 0 in array [ 'a', 'b', 'c' ]
// b is at position 1 in array [ 'a', 'b', 'c' ]
// c is at position 2 in array [ 'a', 'b', 'c' ]
//
//
// function printHalf(num) {
//   console.log(num / 2);
// }
//
// myForEach([10, 50, 120], printHalf); // prints
// 5
// 25
// 60
```

### mySelect

```js
// Write a function `mySelect(arr, cb)` that accepts an array and a callback. It should
// pass each element, its corresponding index, and the array itself to the callback. It
// should return a new array of all the elements in the input array `arr` where the
// callback `cb` returns true.
//
// Examples:
//
// function isEven(num) {
//   return num % 2 === 0;
// }
//
// mySelect([1,2,3,4,5,6], isEven); // => [ 2, 4, 6 ]
//
//
// function isNegative(num) {
//   return num < 0;
// }
//
// mySelect([12, -14, 4, -10.2, 0], isNegative); // => [ -14, -10.2 ]
```

### myMap

```js
// Write a function `myMap(arr, cb)` that accepts an array and a callback. It should
// pass each element, its corresponding index, and the array itself to the callback.
// Do not use the built in `Array.prototype.map` method. It should return an array
// where each element is the return value of the callback given the element in the
// corresponding position. See the examples.
//
// Examples:
//
// function doubler(num) {
//   return num * 2;
// }
//
// myMap([2, 4, 6, 1], doubler); // => [ 4, 8, 12, 2 ]
//
// myMap([9, 25, 100, 36, 81], Math.sqrt); // => [ 3, 5, 10, 6, 9 ]
```

### myEvery

```js
// Write a function `myEvery(arr, cb)` that takes in an array and a callback.
// The function should call the cb for every element of the array.
// The function should return true only if the callback returns true when passed in every the
// element of the array. The function should return false otherwise.
//
// Examples:
//
// function isEven(num) {
//   return num % 2 === 0;
// }
//
// myEvery([10, 4, 8, 20], isEven); // => true
// myEvery([2, 2, 10, 11, 12], isEven); // => false
```

### mySome

```js
// Write a function `mySome(arr, cb)` that takes in an array and a callback.
// The function should call the callback for every element of the array. The function
// should return true if the callback returns true when passed in any element of the array.
// The function should return false otherwise.
//
// Example:
//
// function isNegative(num) {
//   return num < 0;
// }
//
// mySome([10, -10, 11, 4], isNegative); // => true
// mySome([-10, -10, -11, -4], isNegative); // => true
// mySome([2, 4, 6, 8], isNegative); // => false
```

### countAdjacentSums

```js
// Write the function `countAdjacentSums(arr, n)` that takes an array and number.
// It should count the number of times that two adjacent numbers in an array add up
// to n.
//
// Examples:
// countAdjacentSums([1, 5, 1], 6) //=> 2
// countAdjacentSums([7, 2, 4, 6], 7) //=> 0
// countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13) //=> 3
```

### signFlipCount

```js
// Write a function `signFlipCount` that takes in an array of numbers as arguments.
// The function should return the number of times adjacent numbers in the
// array switch signs from positive to negative or vice versa. The number 0 is
// neither positive nor negative.
//
// Examples:
// signFlipCount([5, 6, 10, 3]); //=> 0
// signFlipCount([-12, 0, -3, -5]); //=> 0
// signFlipCount([-12, 10, -3, -5]); //=> 2
// signFlipCount([1, -2, -3, -4]); //=> 1
// signFlipCount([-1, 11.3, -3, 100]); //=> 3
```

### powerSequence

```js
// Write a function `powerSequence(base, length)` that takes in two numbers,
// `base` and `length`. The function should return an array containing a power sequence
// with the given `length`. Assume that the `length` is at least 1.
//
// The first number of a power sequence begins with `base`. The second number of the
// sequence is the product between the first number and the base. The third number of the
// sequence is the product between the second number and the base...
//
// Examples:
//
// powerSequence(3, 4); // => [ 3, 9, 27, 81 ]
// powerSequence(2, 6); // => [ 2, 4, 8, 16, 32, 64 ]
// powerSequence(8, 3); // => [ 8, 64, 512 ]
```

### collapseString

```js
// Write a function `collapseString(str)` that takes in a string as an argument.
// The function should return the string where 'streaks' of consecutive characters
// are collapsed to a single character.
//
// Examples:
//
// collapseString('apple'); //=> 'aple'
// collapseString('AAAaalviiiiin!!!'); //=> 'Aalvin!'
// collapseString('hello   app academy'); //=> 'helo ap academy'
```
