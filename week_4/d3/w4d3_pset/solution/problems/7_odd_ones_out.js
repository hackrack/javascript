/***********************************************************************
Write a function oddOnesOut(array) that takes in an array of strings and
returns a new array array containing only elements that appeared an even
number of times in the input array.

Examples:

var arr1 = ['a', 'b', 'b', 'c', 'd', 'c', 'c', 'd']
oddOnesOut(arr1); // => [ 'b', 'd' ]

var arr2 = ['fish', 'fish', 'dog', 'cat', 'dog', 'dog']
oddOnesOut(arr2); // => [ 'fish' ]
***********************************************************************/

function elementCount(array) {
  var countObj = {};

  for (var i = 0; i < array.length; i += 1) {
    var key = array[i];

    if (countObj[key] === undefined) {
      countObj[key] = 1;
    } else {
      countObj[key] += 1;
    }
  }

  return countObj;
}

function oddOnesOut(array) {
  var count = elementCount(array);
  var result = [];

  for (var ele in count) {
    if (count[ele] % 2 === 0) {
      result.push(ele);
    }
  }

  return result;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = oddOnesOut;
