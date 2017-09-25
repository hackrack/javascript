/***********************************************************************
Write a function `myMap(arr, cb)` that accepts an array and a callback.
It should pass each element, its corresponding index, and the array
itself to the callback. Do not use the built in `Array.prototype.map`
method. It should return an array where each element is the return value
of the callback given the element in the corresponding position. See
the examples.

Examples:

function doubler(num) {
  return num * 2;
}

myMap([2, 4, 6, 1], doubler); // => [ 4, 8, 12, 2 ]

myMap([9, 25, 100, 36, 81], Math.sqrt); // => [ 3, 5, 10, 6, 9 ]
***********************************************************************/

function myMap(arr, cb) {
  var mapped = [];

  for (var i = 0; i < arr.length; i += 1) {
    mapped.push(cb(arr[i], i, arr));
  }

  return mapped;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = myMap;
