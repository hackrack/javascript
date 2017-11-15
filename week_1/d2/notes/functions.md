## Functions

Great programmers hate repeating themselves, we call this the **DRY** rule (Don't
Repeat Yourself). To avoid repeating expressions over and over again, we use  
**functions**. A function is a procedure of code that will run when *called*. We
only "write" a function once (function definition), but we can "use" it as many times
as we please (function calls).

Let's start with some motivation. Say we wanted to find the average of two numbers:

```js
> (5 + 13) / 2     // find the average of 5 and 13
9

> (10 + 16) / 2   // find the average of 10 and 16
13

> (7 + 2) / 2     // find the average of 7 and 2
4.5
```

The code above is awfully repetitive. It is plain to see that to find the average
of any two numbers, we add them up and divide by 2!
Instead of writing out the math expression every time, let's build a function:

```js
// let's define a function called avg
function avg(num1, num2) {
  return (num1 + num2) / 2;
}
```


### Defining a Function

When we write **function definitions** we can put any valid JavaScript code inside
the function. Let's rewrite `avg` using some nice variable names:

```js
function avg(num1, num2) {
  var sum = num1 + num2;
  var average = sum / 2;
  return average;
}
```

Notice that when we write the function definition for `avg`, we don't put in any real
numbers. We write functions in a *general* way so they will work with a wide range
of data that we provide.

In the case of the `avg` function, we want to use it to calculate the average of any two
numbers. `num1` and `num2` are **parameters** for the `avg` function. In other words,
the `avg` function expects to be given two numbers, `num1` and`num2`. So when we
actually use the function, we better give it the data it expects!

The beauty of a function is that if we define it in a clever way, it will work on a
whole slew of data! For example, we want `avg` to work on any two numbers, whether
or not they are whole numbers, decimal, negative, etc..


### Calling a Function

Now that we know how to define a function, how can we actually use it? After we define a function we can **call**
it as many times as we please.

### A Simple Example

Let's step away from `avg` for a bit to see how a simple function call works. Say
we run a JavaScript file that looks like this:

```js
console.log("First!");

console.log("Second!");
```

When we run such a file there will be no surprises. We will see `First!` printed
out, followed by `Second!`. In other words, JavaScript will evaluate your code
left-to-right and top-to-bottom. Very intuitive! It's exactly how you are reading these
notes right now.

However, when JavaScript sees a function definition, JavaScript will not evaluate the
code inside of the definition. It will only "remember" the code so we can execute
it later. The code below only prints `First!` followed by `Fourth!`:

```js
console.log("First!");

function myFunc() {
  console.log("Second!");
  console.log("Third!");

}

console.log("Fourth");
```

To actually get `myFunc` to evaluate, we must call it with `myFunc()`. The code below
prints out in order:

```js
function myFunc() {
  console.log("Second!");
  console.log("Third!");
}

console.log("First!");
myFunc();
console.log("Fourth!");
```

Let's say JavaScript is running the file above. Here are the steps it would take,
starting from the tippy top of the code:

* JS sees a definition for `myFunc`. It will remember this definition in case we
call the function later. It will **not** evaluate the code inside the function yet.

* JS prints out `First!`

* JS sees that we are calling `myFunc()`. At this point it will look at the prior
`myFunc` definition and run the code inside. It is as if we are "jumping" to inside the
function definition. This means it will print `Second!` followed by `Third!`

* JS sees there is no more code to be run inside of `myFunc`, so it "jumps" back
to where we originally called `myFunc()`

* JS will continue evaluating in order and print `Fourth!`

### An Average Example

When we specify what data to use for a function call, we refer to that process
**passing arguments to the function**.

```js
// this is a function definition
function avg(num1, num2) {
  var sum = num1 + num2;
  var average = sum / 2;
  return average;
}

// this is a function call
avg(10, 16);

// this is another function call
avg(5, 13);
```

When we call the function `avg(10, 16)`, we run the code inside the *definition*
for `avg`. That is, we plug in the parameters with real numbers (`num1` becomes `10`
  and `num2` becomes 16). Think of `num1` and `num2` as *variables* that contain the
  values we pass in when we called the function. Then we proceed by running the code
  inside the function. The parameter names `num1` and `num2` used through the body
  of the function behave like variables.

**Did you know?** the terms `parameter` and `argument` are often used interchangeably
in casual programmer talk, but the words refer to different things. In the case of
our `avg(10, 16)` function call, `num1` and `num2` in the function definition are
parameters, and the actual numbers, `10` and `16`, are arguments!

### Using a Return Value

Now that we know how functions evaluate let's see how a return
value can be used. We'll use `console.log` to see the result we get from the
`avg` function.

```js
function avg(num1, num2) {
  var sum = num1 + num2;
  var average = sum / 2;
  return average;
}

// if we want to check what a function returns we can do this:
var result = avg(10, 16);
console.log(result);       // prints `13`

// or this:
console.log(avg(10, 16));  // prints `13`
```

When we *call* a function, we jump to the function definition and run the code
inside. When we hit a `return` statement, we immediately exit the function, jump
back to where we *called* the function, and evaluate the function call to the value
it *returned*. Every function call evaluates to it's return value! In other words,
the expression `avg(10, 16)` evaluates to `13` just like how the expression `1 + 1` evaluates to `2`.

One thing to watch out for is that once we hit a return value we will exit the
function immediately. This means that any code after a return will not be executed!

```js
function myFunc() {
  console.log('before return');
  return 'a return value';
  console.log('after return');
}

myFunc(); // only prints `before return`
```

Here's some food for thought: the above code only prints out `before return`, why
don't we see `a return value` printed out? Hint: we will only *see* data that we
print out using `console.log`

We can also write functions that don't have return statements. If a function is
not explicitly given a return value, it will automatically return `undefined`

### Anatomy of a Function

To wrap up, here is the general syntax used to define a function:

```javascript
function nameOfFunction(param1, param2, param3, paramN) {
  // function body...
  return "a return value!";
}

// Or we can define a function using a variable
var nameOfFunction = function(param1, param2, param3, paramN) {
  //function body...
  return "a return value!";
}
```

By writing a function we can reuse code over and over again to solve similar problems with
different input data (arguments). For this reason, functions will be your bread and butter
for programming.
