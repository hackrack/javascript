## Looping

A common maneuver in programming is to do a task over and over again. Say, for
instance, our program is printing a range of numbers onto the screen. We could
write code that looks like this:

```js
function print10() {
  console.log(0);
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
  console.log(5);
  console.log(6);
  console.log(7);
  console.log(8);
  console.log(9);
}
```

The code above isn't very elegant. Great programmers are "lazy" in the sense that
they hate repeating similar lines of code. There must be a way to DRY this up
(Don't Repeat Yourself).

What if I wanted to print numbers up to 100? I'd have to write
new functions just for those numbers. This function isn't dynamic, and for very
large numbers (like 2 million) it becomes unfeasible to write by hand. The
programmers of yore developed a construct that we can use called a loop. In
essence, a loop allows us to run code repeatedly *in a loop* until we tell it
to stop.

Loops come in several flavors. The most common in JavaScript are the `for` loop and `while` loop.

### `for` loop

The structure of a `for` loop is as follows:

```js
for ([initialization]; [condition]; [incrementer]) {
  // this is the "body" of the loop
  // do some code...
}
```

* `[initialization]` - This is where you initialize a variable that will be
used as the counter. This counter will be updated in the incrementer and
checked in the condition.

* `[condition]` - If it evaluates to true, we do another loop. If false, we
stop loop. We call each "time" in a loop an **iteration**.

* `[incrementer]` - This is evaluated after every iteration of the loop. **This
step should bring the counter that was created in the `[initialization]` closer
to a `[conditional]` that evaluates to false**. If your code is trapped in
an infinite loop hit `ctrl + C` to kill the program.

Let's write our first `for` loops!

```js
for (var i = 0; i < 10; i += 1) {
  console.log(i);
}
// the above loop will print all numbers 0 through 0

for (var i = 0; i <= 10; i += 1) {
  console.log(i);
}
// the above loop will print all numbers 0 through 10

for (var i = 2; i <= 10; i += 2) {
  console.log(i);
}
// the above loop will print all even numbers from 2 through 10
```

**Did you know?** Using the variable name `i` as a counter is very common in
a loop. Although the choice of name does seem a bit arbitrary, the convention is widespread -
so you should adopt it!

### Steps `for` a Loop

When running a `for` loop, there are a couple of steps that take place:

1. initialize the counter

2. evaluate the condition
  * if it evaluates to `false`, exit the loop

  * if it evaluates to `true`, move forward to *step 3*

3. run all the code inside the body of the loop

4. increment the counter and go back to *step 2*

### Making Loops Dynamic

So far we have been using literal numbers inside of our loops to control how
our loops *iterate*. Using what we learned before, let's use variables and
parameters to make our loops dynamic. We can build a very flexible function like so:

```js
function printNums(start, end, step) {
  for(var i = start; i <= end; i += step) {
    console.log(i);
  }
}

printNums(0, 12, 1);  // prints all numbers from 0 to 12
printNums(20, 30, 2); // prints all even numbers from 20 to 30
printNums(0, 12, 3);  // prints all multiples of 3 from 0 to 12
printNums(0, 95, 5);  // prints all multiples of 5 from 0 to 95
```

### Infinite Loops

It is possible to to have a loop that never ends.
The following loops will lead to deadly infinite loops:

```js
for (var i = 0; i < 200; i -= 1) {
  //some code...
}

for (var i = 32; i >= 2; i += 1) {
  //some code...
}
```

Remember that a loop will stop running once the middle condition evaluates to `false`.
In the infinite loops above, the conditions will always be `true`!

Sometimes you may want to create an intentional infinite loop. Check out the code below:

```js
for (var i = 1; true; i += 1) {
  console.log(i);
}

// the above loop will print increasing numbers forever!
```

### `while` loop

```js
while ([conditional]) {
  //do something...
}

var i = 0;

while (i < 10) {
  console.log(i);
  i++;
}
```

* `[conditional]` - If it evaluates to true, we do another loop. If false, we
don't.

With these new constructs in our toolbelt, we can fix the problems with our
earlier `print10` function.

```js
function printN(n) {
  var i = 0;

  while (i < n) {
    console.log(i);
    i++;
  }
}

printN(10);
// this will print all numbers from 0 through 9, why is 10 not included?
```

Can you write this using a `for` loop? Do it.

### Looping Keywords

* `break` - Terminates the loop.

* `continue` - Skips the current loop iteration.

If we wanted to change our `printN` function so that it skipped multiples of 5,
we could write:

```js
function printNSkip5(n) {
  for (var i = 0; i < n; i++) {
    if (i % 5 === 0) {
      continue;
    }
    console.log(i);
  }
}

printNSkip5(30); // prints all numbers from 0 to 30, except multiples of 5
```

If we wanted to change our `printN` function so that it stops as soon as it hits
a multiple of 5, we could write a `while` loop:

```js
function printNStop5(n) {
  var i = 1;

  while (i < n) {
    if (i % 5 === 0) {
      break;
    }

    console.log(i);
    i += 1;
  }
}

printNStop5(30); // prints all numbers from 1 through 4
```

### Choosing `while` vs `for`

`while` and `for` are two different ways we can loop in JavaScript. Thy can be used
interchangeably. That means that you can always find a way to write a `for` loop
that mimics a `while` loop and vice versa. A `for` is nice because we can quickly
see all parts of the loop on a single line. However a `while` is also nice because
it is succinct and also expressive. Practice both and them in your programming
toolbelt!
