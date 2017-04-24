## Higher-Order Functions

A JavaScript function is considered higher-order if it (1) takes a function as an
argument or (2) returns a function as a return value. Think of functions as any
other data type; they can be passed around and stored in variables like simple data!
We'll learn about type (1) in this course, as it may aid you on a bootcamp interview.

### Functions as Arguments - Callbacks

Let's take a look at a higher-order function that takes another function as an argument.
We call the function being passed in a **callback**. In the example below, `sayHello`
is being used as a callback for `higherOrder`:

```js
function higherOrder(cb) {
  console.log('before the callback');
  cb();
  console.log('after the callback');
}

function sayHello() {
  console.log('hello!');
}

higherOrder(sayHello); // prints
// before the callback
// hello!
// after the callback
```

In the example above, notice that we are passing the actual `sayHello` function into
`higherOrder` when we call it. Like a normal function call, the value `sayHello` will
take the place of the parameter `cb`. That means whenever we refer to `cb` while evaluating
the call to `higherOrder` we are really referring to the `sayHello` function. This means
that calling `cb()` will really call `sayHello()`! Based on our existing understanding of
how parameters and arguments work, nothing too unusual is really happening here.
A parameter name (`cb`) is always replaced with the data we pass in (`sayHello`).

**Did you know?** By convention, `cb` is commonly used to name a parameter that is
intended to be a callback function. Of course we can name parameter names whatever we
like, but we should be descriptive.

#### How to Callback

An important detail to notice is that when we wish to pass in a function as callback,
we just refer to the name of the function. We should not call the function before passing it:

```js
// incorrect / this is not using sayHello as a callback
higherOrder(sayHello());
```

The incorrect usage above will pass the *return value* of `sayHello` to `higherOrder`.
To use callbacks, we should pass in the `sayHello` function itself. Repeat after
us: every function call evaluates to it's return value. `sayHello` refers to the `sayHello`
function, `sayHello()` refers to the return value of the `sayHello` function.

### A Function is a Function

Since a *callback* is a *function* that we pass as an argument into another function,
it can do all those function things that we know and love. Callbacks can take in
arguments, return data, etc.. They act exactly as a normal function would. Check
out this example:

```js
function higherOrder(cb, str) {
  var result = cb(str);
  console.log('result of callback: ' + result);

}

function sayGoodbye(name) {
  return 'See ya later, ' + name;
}

function respond(name) {
  return 'After a while, ' + name;
}

higherOrder(sayGoodbye, 'Alligator');
higherOrder(respond, 'Crocodile');
```

### But Why?

You may be wondering why using callbacks is useful. Think about why using arguments
in a function is useful in general. We can pass our functions different callbacks and
get drastically different output. Depending on what callbacks we pass in, behavior of our code
will change.

```js
function addAndCall(num1, num2, cb) {
  var sum = num1 + num2;
  return cb(sum);
}

function yellAnswer(answer) {
  console.log(answer + ' IS THE ANSWER!');
}

function double(num) {
  return num * 2;
}

addAndCall(40, 2, yellAnswer);  // prints '42 IS THE ANSWER!'
addAndCall(1, 1, console.log);  // prints 2
addAndCall(10, 2, double);      // returns 24
addAndCall(30, 6, Math.sqrt);   // returns 6
```

Notice in the examples above we use some built-in functions as callbacks. By using
callbacks, we can combine functions in interesting and useful ways.
