/***********************************************************************
Write a function `opposingSums(array)` that takes in an array of numbers
and returns a new array containing half the number of elements. Assume
the `array` contains an even number of elements.

The first element of the new array should be the sum between the 1st and
last element of the original `array`. The second element of the new array
should be the sum between the 2nd and 2nd to last element. The third
element of the new array should be the sum between the 3rd and 3rd to
last element... etc.

Examples:

var arr1 = [3, 2, 11, 4, 7, 9];
opposingSums(arr1); // => [ 12, 9, 15 ]

var arr2 = [1, 2, 3, 4]
opposingSums(arr2); // => [ 5, 5 ]
***********************************************************************/

function opposingSums(array) {
  var half = array.length / 2;
  var arr = [];

  for (var i = 0; i < half; i += 1) {
    var num1 = array[i];
    var num2 = array[array.length - 1 - i];
    var sum = num1 + num2;

    arr.push(sum);
  }

  return arr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = opposingSums;
