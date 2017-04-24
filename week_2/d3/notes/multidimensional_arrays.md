## Multidimensional arrays

So far we have been using arrays to store simple data types like numbers and strings.
However, we can store *any* data (like arrays and objects) inside an array. Let's
look at an array that contains an array as each element. We call this a 2-Dimensional
array:

```js
var multiArray = [
  [0, 1, 2],
  [3, 4],
  [5, 6, 7]
];
```

Notice how we style the 2D-array above; we do this so it is plain to see each sub-array
in the outer `multiArray`. Indent your 2D-arrays in the same way!

### Indexing Multi-Arrays

`multiArray` is still a regular array at heart, and so we can index it in the usual
way. Indexing the outer array will give us a single element, which happens to be
another array:

```js
var multiArray = [
  [0, 1, 2],
  [3, 4],
  [5, 6, 7]
];

multiArray[0]; // => [0, 1, 2]
multiArray[1]; // => [3, 4]
multiArray[2]; // => [5, 6, 7]
```

So you may be wondering, if `multiArray[1]` evaluates to the array `[3, 4]`, then
how do we index *that* array? We can use another index `[]`!

```js
var multiArray = [
  [0, 1, 2],
  [3, 4],
  [5, 6, 7]
];

// let's grab the first element of the second sub-array
multiArray[1][0]; // => 3

// second element of second sub-array
multiArray[1][1]; // => 4
```

Double indexing this `multiArray` looks a bit weird, but it does make sense because
we know that JavaScript will evaluate `multiArray[1][0]` from left to right. The first
bit of the expression (`multiArray[1]`), will give us an array, so we are just grabbing
the element at index `0` of that array.

**Did you know?** You can index literal arrays. For example  `['a', 'b', 'c'][1]`,
evaluates to `'b'`. Usually we index an *array variable*. But like we always say,
every variable will evaluate to the data we assigned it anyways!

### Iterating Through Multi-Arrays

To iterate through a multi-array, we use nested loops. To iterate through a 2D array,
the other loop will iterate through the outer array, and the inner loop will iterate
through each inner subarray.

```js
function print2D(array) {
  // this loop iterates through the outer array
  for (var i = 0; i < array.length; i += 1) {
    // this loop iterates through the inner arrays
    for (var j = 0; j < array[i].length; j += 1) {
      console.log(array[i][j]);
    }
  }
}

var teachers = [
  ["Hopper", "Turing", "Church"],
  ["Euler", "Cantor"],
  ["Plato", "Aristotle", "Chomsky"]
];

print2D(teachers);
```

The `print2D` function prints out the `teachers` in order:

```
Hopper
Turing
Church
Euler
Cantor
Plato
Aristotle
Chomsky
```

Nice! Now we have a function that prints out the elements of a 2D array, but let's
make it more readable. Readability counts, especially in "complicated" code!

```js
function print2D(array) {
  for (var i = 0; i < array.length; i += 1) {
    var subArray = array[i]
    for (var j = 0; j < subArray.length; j += 1) {
      console.log(subArray[j]);
    }
  }
}
// Much better.
```
