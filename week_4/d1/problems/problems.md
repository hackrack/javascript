### moreDotLessDash

```js
// Write a function `moreDotLessDash(str)` that takes in a string and returns
// the true if the string contains more dots ('.') than dashes ('-'), false otherwise.
//
// Examples:
//
// moreDotLessDash('2-D arrays are fun. I think.'); // => true
// moreDotLessDash('.-.-.'); // => true
// moreDotLessDash('.-'); // => false
// moreDotLessDash('..--'); // => false
```

### isSorted

```js
// Write a function `isSorted(array)` that takes in an array of numbers and returns
// true if the elements of the array are in increasing sorted order and returns false
// if the elements are not in increasing order.
//
// Examples:
//
// isSorted([3, 5, 11, 9, 15, 16]); // => false
// isSorted([3, 5, 11, 13, 15, 16]); // => true
// isSorted([9, 4, 1, 5, 6, 2]); // => false
// isSorted([1, 2, 4, 5, 6, 9]); // => true
```

### toFeet

```js
// Write a function `toFeet(distances)` that takes in an array of distance strings.
// The given distances will either be in `feet` or `yards`.
// The function should return a new array where all the distances are converted
// to feet. There are 3 feet in 1 yard.
//
// Examples:
//
// var arr1 = ['10 feet', '3 yards', '5 yards', '3 feet'];
// toFeet(arr1); // => [ '10 feet', '9 feet', '15 feet', '3 feet' ]
//
// var arr2 = ['2 yards', '3 feet', '10 yards'];
// toFeet(arr2); // => [ '6 feet', '3 feet', '30 feet' ]
```

### smallestPrime

```js
// Write a function `smallestPrime(array)` that takes in an array of numbers
// and returns the smallest prime number in the array.
//
// HINTS:
// - start by creating an `isPrime` helper function
// - the smallest prime number is 2
//
// Examples:
//
// var arr1 = [ 6, 7, 12, 11, 5, 4 ];
// smallestPrime(arr1); // => 5
//
// var arr2 = [11, -7, 7, 8, 6, 10];
// smallestPrime(arr2); // => 7
//
// var arr3 = [];
// smallestPrime(arr3); // => null
//
// var arr4 = [4, 6, 8, 10];
// smallestPrime(arr4); // => null
```
