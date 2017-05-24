## Introduction to Recursion

Let's explore a bit of recursion as one of our last topics of the course! Recursion
will be a big topic covered in your full bootcamps, but let's get our feet wet
in some things to come!

### What is Recursion?

In programming, [Recursion][recursion-wiki] is when a **function calls itself**. As
we have seen during the course using helper functions can be very useful when it
comes to solving problems. In our classic helper function examples, we have commonly
called functions from other functions. Recursion is a similar process except we
are calling the **same function**.

As we explore recursion it is important to keep in mind all of the previous concepts
we learned about functions. All those function concepts will still apply to recursion!

### A Simple Recursion

Let's write our very first (albeit broken) recursive function:

```js
// recursive function definition:
function sayHello() {
  console.log('hello');
  sayHello();
}

// function call:
sayHello(); // prints "hello" forever
```

Notice that the `sayHello` function definition contains a call to itself!
A recursive function definition still obeys all the evaluation rules as a normal
function, so like usual, the code will not run until we *call* it.

Let's step through how this code evaluates. For clarity, we'll be numbering the
calls to `sayHello`. The initial call will be number `0`:

+ When we call `sayHello` for the first time (`sayHello0`), we run the code inside
the definition as usual. That means we print out "hello" and call `sayHello` again
(`sayHello1`). Now we need to evaluate the call to `sayHello1`.
+ `sayHello1` prints "hello" and calls `sayHello2`, now we need to evaluate `sayHello2`
+ `sayHello2` prints "hello" and calls `sayHello3`
+ `sayHello3` prints "hello" and calls `sayHello4`
+ ... and this pattern continues forever!

Our `sayHello` function enters an infinite loop where 1 call to the function triggers
another call. And that call triggers yet another call, etc.. If you run this code,
you will enter an infinite loop. However, the program will crash with an error.
The nature of this error requires understanding of the inner workings of the computer on
but the gist is that every call to a function takes up a piece of your computer's memory.
Since our code continuously calls functions forever, we run out of memory and crash!

### Recursive Countdown

In our previous example we saw how our recursive function crashed because it entered
a infinite loop. Of course useful recursive functions should not crash, so let's
go through the process of building one up!

Let's build a recursive `countDown` that starts ticking down numbers:

```js
function countDown(num) {
  console.log(num);
  countDown(num - 1);
}

countDown(10);  // this prints decreasing numbers starting at 10 forever
```

This recursive definition evaluates in a similar way to before, however, now we
are passing in numbers. For any `num`, every call to `countDown(num)` will call
`countDown(num - 1)`. Starting from our initial call to `countDown(10)`

+ `countDown(10)` prints and calls `countDown(9)`, so next we evaluate `countDown(9)`
+ `countDown(9)` prints and calls `countDown(8)`
+ `countDown(8)` prints and calls `countDown(7)`
+ ... and this process continues forever!

In your mind imagine these successive calls:  

`countDown(10)` -> `countDown(9)` -> `countDown(8)` ...

Our countdown crashes with a similar error as last time because we entered an infinite
loop again. Hmmm, let's modify our function so that it stops at 0:

```js
function countDown(num) {
  if (num === 0) {
    console.log("Houston, we have lift-off!");
    return;
  }

  console.log(num);
  countDown(num - 1);
}

countDown(10);  // prints numbers from 10 to 1, and finally "Houston, we have lift-off!"
```

Now our function stops once we hit 0! Let's say we get to the point where we evaluate
`countDown(0)`. That means that the if condition is true, so we print the lift-off
message and `return`. Recall that as soon as we hit a `return` we exit that function
call immediately. Since we immediately return out of our call to `countDown(0)`,
`countDown(0)` never calls `countDown(-1)`, breaking our recursive loop!

### Anatomy of a Recursive Function

In recursive functions, we need to implement a way to stop the recursive loop and
prevent it from looping forever. We took care of the infinite loop issue in our
`countDown` by using an if statement that prevents the next function call. In general
we call such a statement the **base case**

A recursive function consists of two fundamental parts:
+ the **base case** where we halt the recursion by not making a subsequent call
+ the **recursive step** where we continue the recursion by making another subsequent call

```js
function countDown(num) {
  // base case
  if (num === 0) {
    console.log("Houston, we have lift-off!");
    return;
  }

  console.log(num);
  // recursive step
  countDown(num - 1);
}
```

### Solving Problems with Recursion

Disclaimer! At this point, solving problems using recursion may seem like magic.
If you find the following example confusing, don't worry it's suppose to be, no need
to wrack our brains on it now. Spend your time studying the previous `countDown`
as it showcases the fundamental structure of recursion.

Recall our factorial problem from earlier in the course:

> Write a function `factorial(n)` which takes a number and returns the factorial of n.
> A factorial is the product of all whole numbers between 1 and n, inclusive.

How can we solve this problem using recursion? Notice that the structure of `factorial`
has us take decreasing numbers similar to the `countDown`. However, this time we need
to keep multiplying them together:

```js
function factorial(n) {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

factorial(5); // => 120
```

[recursion-wiki]: https://en.wikipedia.org/wiki/Recursion
