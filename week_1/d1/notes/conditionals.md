## Conditionals

A conditional uses an expression that evaluates to either `true` or `false`. We can
use conditionals to create branching logic within our program and solve more
complex problems. Conditionals are useful because our code can be dynamic.

Conditionals in programming will always ask a `true` or `false` question. If the answer is `true`,
we run some code. If the answer is `false`, we run some other code.

### if ... else statements

Conditionals are primarily utilized within `if-then` statements. The basic
structure is:

```js
if (condition) {
  //do some code...
} else {
  //do some other code...
}
```

If the condition is `true` then we run the code inside the `if`, but if the condition is false then we run the code inside the `else`.

What will the program below print to the console?

```js
if (1 + 2 === 3) {
  console.log("Branch 1");
} else {
  console.log("Branch 2");
}
// this prints "Branch 1"
```

### else if statements

We can also use `else if` if there are several conditions that lead to many
different branches of logic:

```js
if (condition1) {
  //do something...
} else if (condition2) {
  //do something else...
} else if (condition3) {
  //do something else...
} else {
  //do something if none of the conditions above are true
}
```

In a chain of `if` followed by multiple `else if`s, the conditions in the chain
will be evaluated top-down until the one of the conditions evaluate to `true`.
Once we find a condition that is `true`,  we won't check any of the other
conditions.
This means that in a chain of `if ... else if ... else` only one of the branches
will ever be taken! We can say that branches in a `if ... else if ... else`
are exclusive.

Check out the code below and feel free to run it:

```js
var myNum = 42;

if (myNum < 0) {
  console.log('negative');
} else if (myNum > 0) {
  console.log('positive');
} else {
  console.log('zero!')
}
// the code above will only print out 'positive'
```

Also notice that `else` acts as a default case when none of the preceding
conditions are found to be `true`:

```js
var myNum = 0;

if (myNum < 0) {
  console.log('negative');
} else if (myNum > 0) {
  console.log('positive');
} else {
  console.log('zero!')
}
// the code above will only print out 'zero!'
```

We can also have multiple `if` statements in a row. Each condition will be
checked:

```js
var myNum = 42;

if (myNum > 0) {
  console.log("greater than 0");
}
if (myNum < 100) {
  console.log("less than 100");
}
// the code above will print out both 'greater than 0' and `less than 100`
```

Compare that with `if ... else if`:

```js
var myNum = 42;

if (myNum > 0) {
  console.log("greater than 0");
} else if (myNum < 100) {
  console.log("less than 100");
}
// the code above will only print out 'greater than 0'
```

In the examples above we used numbers, but we are free to use any data that we please.
Most often times we will use comparison expressions because they evaluate to `true` or
`false`. `name === "App Academy"`, `isHungry === true`, or even something like this:

```js
if (true) {
  console.log("always true!");
}
```

Remember that all the conditions will be evaluated to a `true` or `false`, because any
data has a boolean identity!

### Styling Conditionals
One thing to notice is that in a chain of `if ... else if ... else`, we choose
to start the `else` on the same line where the preceding conditional ends. We
do this because an `else` cannot stand alone, it **must** follow another
condition.

```js
if (condition) {
  // do something...
} else if { // start the else here
  // do something else
}
```

For a similar reason if we have consecutive `if` statements we prefer to write
them on their own lines because those conditionals don't have to be exclusive.

As we will be seeing throughout the course, the way we **style** (how we use
space, indentation, etc..) our code won't effect how our code behaves, but it
will effect how our code reads. Our goal is to write code that is easy to understand.

Check out this condition below that will run, but is poorly styled:

```js
var num = 42;
if(num > 0){console.log('positive');}else{console.log('negative');}
// while "correct", the code above is low quality and very hard to read
```
