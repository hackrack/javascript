## Callback Methods

Previously we solved callback problems, that is, writing functions that take in
other functions: myForEach, myMap, myEvery, etc..

You may have noticed that many of these problems start with "my." Just like the
myIndexOf problem, we really had you write your own implementations of built-in
JavaScript methods. It's important to understand that the built-in features and
methods that we use everyday were once written in JS. So, we have been implementing
JavaScript features manually all along! Don't forget that you can always reference
[MDN][mdn] for documentation on how to use the following methods.

### Array Methods that use Callbacks

`map`, `every`, and `some` are some of the comparable array methods that take in
callback functions. These are all functions we wrote previously and they behave
in a similar way. However, notice how we call these methods. They are array methods,
so we call them with `array.methodName(...)`:

```js
function double(n) {
  return 2 * n;
}

function isEven(n) {
  return n % 2 === 0;
}

[1, 2, 3].map(double); // => [ 2, 4, 6 ]
[9, 100, 16].map(Math.sqrt); // => [ 3, 10, 4 ]
[10, 50, 26, 4].every(isEven); // => true
[10, 51, 26, 4].every(isEven); // => false
[10, 51, 26, 4].some(isEven); // => true
[1, 3, 7, 27].some(isEven); // => false
```

### Iterating with forEach

Remember the `myForEach` problem we did previously? Yup, it's actually built in to
JavaScript! `forEach` affords us a way to iterate through an array ([documentation here][for-each]).
Like we have seen throughout the course, iterating through an array in order is a
very common operation. To make our programmer lives easier, we don't have to fiddle with creating
counters and incrementing if we use `forEach`. It may be hard to wrap your head
around how `forEach` is able to loop through elements of the array. As you look at
the example below, keep in mind the code you wrote for `myForEach`:

```js
function sayHello(name) {
  console.log('Hello ' + name + '!');
}

var instructors = ['Ali', 'Meagan', 'Oscar'];
instructors.forEach(sayHello);
```

The above code calls the sayHello function on each element of the array. This results in us saying hello to everyone:

```
Hello Ali!
Hello Meagan!
Hello Oscar!
```

### Anonymous Functions

Recall that functions like `forEach` are unique because they take in callback functions.
While it may seem like a pain to have to define a separate function just to iterate using
`forEach`, we actually don't need to! We can use an **anonymous function** that we
define directly in the arguments for `forEach`. This works because we are still
passing in a function. Instead of passing a function by name, we are passing in the
function definition itself.

It is okay if the syntax below looks a bit confusing. The idea to take away is that
we are passing in a literal function definition to `forEach`. No need to study
anonymous functions for a bootcamp interview, they are a mainstay of advance JS programming.

```js
var instructors = ['Ali', 'Meagan', 'Oscar'];

instructors.forEach(function (name) {
  console.log('Hello ' + name + '!');
});
```


[mdn]: https://developer.mozilla.org/en-US/
[for-each]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach?v=control
