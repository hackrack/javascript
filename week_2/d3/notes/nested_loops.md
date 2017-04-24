## Nested Loops

Previously we have learned that for loops are valuable because they allow us to repeat
code many times. That is, we can write a small amount of loop code, and have it do a
lot of "work" over many iterations. Inside the body of a loop we can put any valid
JavaScript code that we please:

```js
for (var i = 0; i < 3; i++) {
  // This is the loop body,
  // We can put any code here!
  console.log("i is:", i);
}
```

We do things like declare variables, write conditionals, and call functions within
the body of a loop; we can even put another loop inside!
This structure is known as **nested loops**:

```js
for (var outer = 1; outer <= 3; outer++) {
  console.log("outer counter:", outer);
  for (var inner = 1; inner <= 5; inner++) {
    console.log("   inner:", inner);
  }
}
```

Fret not! The nested loops above only look complicated. Individually, each `for` loop
really behaves the same way any plain old loop would. With that fact in mind, the above
nested loops print out this output:

```
outer counter: 1
   inner: 1
   inner: 2
   inner: 3
   inner: 4
   inner: 5
outer counter: 2
   inner: 1
   inner: 2
   inner: 3
   inner: 4
   inner: 5
outer counter: 3
   inner: 1
   inner: 2
   inner: 3
   inner: 4
   inner: 5
```

Here's how you should understand this output. We know that the outer loop iterates
through 3 times (1 through 3). **On every iteration of a loop, we run all the code
inside the loop's body**. That is why we see the outer counter printed out 3
times in all. However, after we print out `outer` counter, we must run the entire
`inner` loop all the way through (1 through 5). Notice that we run the entire `inner`
loop 3 different times in total.

To really see how the counters change, let's edit our `console.log` print statements:

```js
for (var outer = 1; outer <= 3; outer++) {
  for (var inner = 1; inner <= 5; inner++) {
    console.log(outer + ', ' + inner);
  }
}
```

Here is the resulting output we get:

```
1, 1
1, 2
1, 3
1, 4
1, 5
2, 1
2, 2
2, 3
2, 4
2, 5
3, 1
3, 2
3, 3
3, 4
3, 5
```

Notice that the first number (`outer`) in each pair *does not change every
iteration*, but the second number (`inner`) *does change every iteration*.

### All Possible Pairs

Nested for loops are particularly useful for considering all possible pairs in an array.
For example, let's print out all possible pairs of elements in a single array. To do
this we will use nested for loops that both iterate through the same array:

```js
var names = ['Eliot', 'Phi', 'Chase'];

for (var i = 0; i < names.length; i++) {
  var name1 = names[i];
  for (var j = 0; j < names.length; j++) {
    var name2 = names[j];
    console.log(name1, name2);
  }
}
```

Since we want to consider two elements in the array, we use two separate
indices `i` and `j`. Here is the resulting output we get:

```
Eliot Eliot
Eliot Phi
Eliot Chase
Phi Eliot
Phi Phi
Phi Chase
Chase Eliot
Chase Phi
Chase Chase
```

### Only Distinct Pairs

Nice! It looks like we were able to print out all possible pairs, but it appears we
have some duplicate pairs. `Eliot Eliot` is not a valid pair since both names refer
to the same person. Furthermore, `Eliot Phi` is one pair, but later on we have `Phi Eliot`.
Every combination of names actually shows up twice, just in a different order.

If we want to consider only **distinct** pairs, then we should ensure that counter `j` is
always greater than `i`.

```js
var names = ['Eliot', 'Phi', 'Chase'];

for (var i = 0; i < names.length; i++) {
  var name1 = names[i];
  // Because we initialize j to be i + 1, j will always be greater than i
  for (var j = i + 1; j < names.length; j++) {
    var name2 = names[j];
    console.log(name1, name2);
  }
}
```

Changing the counters in this way results in only distinct pairs:

```
Eliot Phi
Eliot Chase
Phi Chase
```

It may be difficult to wrap our heads around *why* modifying the counter in this way
leads to such different output, so here's some food for thought: remember that both
the outer loop `i` and inner loop `j` iterate through the **same array**, `names`.
When we force `j` to be strictly greater than `i`, we are making it so that the `j`
index is never what the `i` index was previously since indices only increase `++`
as we iterate. Take a minute and let that sink in.

### A Distinct Example: `pairZero`

Here is a classic example of a problem involving nested loops where we need to avoid
duplicate pairs. This problem uses a bit of multi-dimensional arrays, so feel free to
peek at those notes [here][multi-arrays].

```js
// Write a function `pairZero(array)` that takes in an array of numbers as an argument
// and returns all pairs of numbers that sum to 0. Assume that all the numbers in
// the given array are unique. The function should return an array that contains
// pairs, a single pair is an array of length 2.
//
// Examples:
//
// pairZero([4, 1, 0]); // => []
// pairZero([1, 2, -1]); // => [ [ 1, -1 ] ]
// pairZero([0, 2, 5, -2, 7, -7]); // => [ [ 2, -2 ], [ 7, -7 ] ]
```

Let's write a partial solution to lay a foundation:

```js
// Incomplete solution that returns duplicate pairs
function pairZero(array) {
  var pairs = [];

  for (var i = 0; i < array.length; i += 1) {
    for (var j = 0; j < array.length; j += 1) {
      var num1 = array[i];
      var num2 = array[j];
      if (num1 + num2 === 0) {
        pairs.push([num1, num2]);
      }
    }
  }

  return pairs;
}

// This gives duplicate pairs :(
pairZero([4, 1, 0]); // => [ [0, 0] ]
pairZero([1, 2, -1]); // => [ [ 1, -1 ], [ -1, 1 ] ]
pairZero([0, 2, 5, -2]); // => [ [ 0, 0 ], [ 2, -2 ], [ -2, 2 ] ]
```

Using what we learned earlier in this reading, let's get rid of those duplicates:

```js
function pairZero(array) {
  var pairs = [];

  for (var i = 0; i < array.length; i += 1) {
    for (var j = i + 1; j < array.length; j += 1) {
      var num1 = array[i];
      var num2 = array[j];
      if (num1 + num2 === 0) {
        pairs.push([num1, num2]);
      }
    }
  }

  return pairs;
}

// This implementation of pairZero gives distinct pairs :)
pairZero([4, 1, 0]); // => []
pairZero([1, 2, -1]); // => [ [ 1, -1 ] ]
pairZero([0, 2, 5, -2, 7, -7]); // => [ [ 2, -2 ], [ 7, -7 ] ]
```

[multi-arrays]: ./multidimensional_arrays.md
