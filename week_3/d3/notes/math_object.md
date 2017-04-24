## Math Object

The `Math` object is a built-in object inJavaScript that has many properties and
methods. Some methods you may find especially useful to solving interview style
problems are:

+ `Math.floor`
+ `Math.ceil`
+ `Math.round`
+ `Math.sqrt`
+ `Math.pow`
+ `Math.sign`
+ `Math.abs`
+ `Math.PI`

Play around with these methods and check out the documentation for details on all
the built-in methods available by visiting [Mozilla Developer Network (MDN)][mdn].

```js
Math.floor(3.7) // => 3
Math.ceil(4.2) // => 5
Math.sqrt(25) // => 5
Math.pow(5, 3) // => 125
Math.PI // => 3.141592653589793
```

Don't feel like you have to memorize every built-in method that is available to you.
Feel free to reference the documentation frequently as you write code. Many
interviewers are more than happy to clarify what built-in methods and tools are at
your disposal. The point of a technical interview is not to test what methods
you have memorized; it is to test how you work through problems with the tools you
have.

Here are some examples of how we can use these `Math` methods to solve problems!

### areaCircle

```js
// Write a function areaCircle(radius) that returns the area of a circle with the
// given radius. The area should be rounded down to the nearest whole number.
// Area of Circle = PI * radius * radius
//
// Examples
//
// areaCircle(5); // => 78
// areaCircle(3); // => 28

function areaCircle(radius) {
  var area = Math.PI * Math.pow(radius, 2);
  return Math.floor(area);
}
```

### middleElement

```js

// Write a function middleElement(array) that takes in an array of elements and
// returns the element in the middle of the array if the array contains an odd
// number of elements. If the array contains an even number of elements, the
// function should return the middle two elements in an array.
//
// Examples:
//
// middleElement([1,2,3,4,5]); // => 3
// middleElement(['a', 'b', 'c', 'd', 'e', 'f']); // => [ 'c', 'd' ]

function middleElement(array) {
  if (array.length % 2 === 0) {
    var mid1 = array[array.length / 2 - 1];
    var mid2 = array[array.length / 2];
    return [mid1, mid2];
  } else {
    var midIndex = Math.floor(array.length / 2);
    return array[midIndex];
  }
}
```


[mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
