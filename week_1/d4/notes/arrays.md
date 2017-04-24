## Arrays

Sometimes we will want to group related data together into a convenient
structure. For instance, what if I wanted to refer to the alphabet. Sure, I could
create a bunch of strings:

```js
var a = "a";
var b = "b";
var c = "c";
var d = "d";
// and so on...
```

But this becomes cumbersome and unmanageable quickly. The Array is a data
structure that solves this problem. Arrays are defined by `[]` and store their
elements in sequential order. We can put elements into the array, replace elements
in the array, and remove elements from the array.

```js
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
```

I can also structure this array to be more readable:

```javascript
var alphabet = [
  "a", "b", "c", "d", "e",
  "f", "g", "h", "i", "j",
  "k", "l", "m", "n", "o",  
  "p", "q", "r", "s", "t",
  "u", "v", "w", "x", "y",
  "z"
];
```

### Indexing Arrays

If we want to get the nth-element in the array, we have to 'index' into the
array. **Arrays start at the 0 index, not 1**. This is the convention in
programming.

```js
// using the alphabet array above, the indices of the array are 0 - 25,
// because we start at 0;
alphabet[0] === "a";
alphabet[9] === "j";
alphabet[25] === "z";
alphabet[alphabet.length - 1] === "z";

alphabet[30] === undefined;
```

As we see in the code above, if we try to access an element at an index that is not inside
the array, we get back `undefined`.

By packaging groups of related data in an array, we gain the added benefit of
being able to refer to that data as a single collection. Take a moment to just
appreciate how useful the Array is as a tool for managing complexity... ah.

### Useful methods

Arrays have a bunch of useful properties and methods, such as
`Array.prototype.length` (which returns the number of elements in the array).
Take a look at the [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array),
but these are the ones you should commit to memory:

* `Array.prototype.indexOf(element)`
* `Array.prototype.unshift(element)`
* `Array.prototype.shift()`
* `Array.prototype.push(element)`
* `Array.prototype.pop()`
* `Array.prototype.concat(other_array)`
* `Array.prototype.slice(startIndex, endIndex)`
* `Array.prototype.length` (property)
* `Array.isArray(obj)`

#### `String.prototype.split(separator)` and `Array.prototype.join(separator)`

`String.prototype.split(separator)` is a very helpful string method that splits a string into an array of substrings on the separator and returns the new array. It does not change the original string.

```js
> var sentence = "Hey, whats up? Hello";
undefined

> var words = sentence.split(" "); // separator is a space
[ 'Hey,', 'whats', 'up?', 'Hello' ]

> words;
[ 'Hey,', 'whats', 'up?', 'Hello' ];

> sentence;
'Hey, whats up? Hello'
```

The opposite of that is `Array.prototype.join(separator)`. This array method joins an array into a string where array elements are concatenated by the `separator`. If no separator is specified, array elements are joined by a comma. If an element is undefined or null, it is converted to an empty string. Like `split()`, `join()` does not change the original array.

Try it out in your REPL:

```js
> words;
[ 'Hey,', 'whats', 'up?', 'Hello' ]

> var joinStr = splitStr.join(" ");
'Hey, whats up? Hello'

> joinStr;
'Hey, whats up? Hello'

> words.join(',');
'Hey,,whats,up?,Hello'
```

One side effect of `split()` and `join()` is that when used in conjunction they are very useful for replacing characters or words in a string. Let's say I wanted to replace the word "Hey" with "Hi" in my string above. Or replace all e's with the letter o.

Check it out!

```js
> var replaceHey = str.split("Hey");
[ '', ', whats up? Hello' ]

> replaceHey.join("Hi"); // all the Hey's got replaced with Hi's!
'Hi, whats up? Hello'

> var replaceE = str.split("e");
[ 'H', 'y, whats up? H', 'llo' ]

> replaceE.join("o"); // all the e's got replaced with e's!
'Hoy, whats up? Hollo'
```

### Iterating Over Arrays
Previously we learned how to iterate through certain numbers using a for loop. Check
our this classic for loop that iterates from 0 through 2 as a refresher:

```js
for (var i = 0; i < 3; i += 1) {
  console.log(i);
}
```

We can build on top of that previous knowledge to iterate over **elements** in an
array. Recall that to look at a particular element, we just need to specify the index
it is positioned at. So if an index is just some number starting at 0:

```js
var names = ["Tommy", "Fred", "Kurstie"];

// names.length === 3
for (var i = 0; i < names.length; i += 1) {
  var name = names[i];
  console.log(name);
}

// the loop above will print out every name in the array.
```

Notice that the middle condition of the for loop uses `names.length` and not `3`
explicitly. In this example the `length` of the `names` array is 3, but what if we
wanted to iterate over an array of different length? By referring to the `length` property
of an array, we can write a very versatile loop that iterates over any array! Remember
that we like to write functions in a general way so they work on a range of input
data (arguments). In the function below the input to our `printArray` function can be any array.

```js
function printArray(arr) {
  for (var i = 0; i < arr.length; i += 1) {
    var ele = arr[i];
    console.log(ele)
  }
}
```

Be sure to analyze and understand how the above loop works. Iterating over arrays
will be our bread and butter to solve many types of problems.

### An Important Array Pattern

We can refer to the number of elements inside an `array` with `array.length` and we have
seen that using the `length` property we can iterate over all the elements of any array.
A useful pattern to remember is that the last element of any `array` is always at index
`array.length - 1`. This makes sense because we start counting indices at 0. This
tidbit can be useful solving problems down the line.
