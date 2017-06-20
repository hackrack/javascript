## Controlling Complexity

Uncontrolled complexity is the arch-nemesis of a programmer. If we do not
understand our programs, we will inevitably introduce bugs. Let's
introduce two ideas that will help you in your quest to master the complexity of
your programs: Decomposition and Abstraction.

As a programmers our goal is not just to know how to write code. Our goal is to
write code that **solves a problem**. Often times you will be given large, seemingly
difficult problem on a bootcamp interview. The key to solve an "unmanageable"
problem is to break it down into chunks (functions) that are manageable.

### Decomposition

Decomposition is the process of breaking down a larger problem into it's smaller
sub problems. Let's look at an example:

#### `yellStrings(strings)`

Let's attempt a problem that lends itself nicely to decomposition.

```js
// yellStrings(strings)
// Write a function that takes in an array of strings as an argument. The function
// should return array where every string is "yelled", see the example below:

var yelled = yellStrings(['hello', 'how', 'are', 'you?']);
yelled; //=> ['HELLO!', 'HOW!', 'ARE!', 'YOU?!'];
```

This seems a bit scary, how can we manage to change all the strings in the array?!?
Wait, what if we were given this similar problem instead:

```js
// yellStr(str)
// Write a function that takes in a string as an argument. The function
// should return the string but "yelled", see the example below:

var yelled = yellStr('bootcamp');
yelled; //=> 'BOOTCAMP!'
```

The `yellStr` problem above is way more manageable to solve. Let's take a crack at
building that function:

```js
function yellStr(str) {
  var upperString = str.toUpperCase();
  return upperString + '!';
}
```

Here is where decomposition comes into play. A keen observer will notice that
`yellStr` is a sub-problem of the `yellStrings`. Using the `yellStr` function we
built above, here is how we can solve it:

```js
function yellStr(str) {
  var upperString = str.toUpperCase();
  return upperString + '!';
}

function yelledStrings(strings) {
  var yelled = [];

  for (var i = 0; i < strings.length; i++) {
    var string = strings[i];
    var newString = yellStr(string);
    yelled.push(newString);
  }

  return yelled;
}
```

Notice that the `yelledStrings` function calls the `yellStr` function multiple
times. We already know exactly what the `yellStr` function does, so we are free
to take advantage of it. We are using `yellStr` as a *helper function* to solve
`yelledStrings`.

#### `laligatSum(n)`

Let's decompose a more complicated problem that deals with prime numbers.

```js
// Write a function laligatSum(n) that takes in a number and returns the laligatSum
// of that number. A number's laligat sum is the the sum of all the prime numbers less than or equal
// to that number.
```

From the description above, the laligat sum of 10 is: `2 + 3 + 5 + 7 = 17`

That also means that the laligat sum of 11 is: `2 + 3 + 5 + 7 + 11 = 28`

So our function should behave like this:

```js
var result1 = laligatSum(10);
result1; //=> 17

var result2 = laligatSum(11);
result2; //=>  28
```

We could try to write the whole thing in a single function. Disclaimer! This will
look scary and it should! Solving this complex problem in a single function is messy
and hard to understand:

```js
// Not decomposed and thus complex:
function laligatSum(n) {
  var sum = 0;
  for (var i = 2; i <= n; i += 1) {
    var prime = true;

    for (var factor = 2; factor < i; factor += 1) {
      if (i % factor === 0) {
        prime = false;
        break;
      }
    }

    if (prime) {
      sum += i;
    }
  }
  return sum;
}
```

As you can see, this function is very hard to read and reason about. What
if this code contained a bug? How noticeable would it be? If there was an issue
with how prime numbers are found, would you know where to look?

Check out how we can dramatically simplify this problem if we split it up into
multiple functions:

```js
// Nice and Decomposed:
function isPrime(n) {
  for (var i = 2; i  < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function laligatSum(n) {
  var sum = 0;

  for (var i = 2; i <= n; i += 1) {
    if (isPrime(i)) { // if i is a prime,
      sum += i;       // then add it to sum.
    }
  }

  return sum;
}
```

Notice that we decomposed `laligatSum` into an `isPrime` function (and we have seen
 `isPrime` before). The key to solving a problem on a bootcamp interview is recognizing
 familiar sub-problems! Once we make a separate `isPrime` function, notice how much
 more intuitive the code in `laligatSum` is!

### When to Decompose into Helper Functions

There is no hard rule to decide on when and how to decompose a large problem into
multiple helper functions. Do what makes sense in context of the problem. For example,
the question for `laligatSum` states that we are concerned with prime numbers, and
so it would be great if we had a helper function `isPrime`.

Use your best judgement. If you are finding that a single function is getting overly complicated,
split off into another helper function to keep things tidy (in your code and in your brain!).

### Abstraction

```
The computing scientist’s main challenge is not to get confused by the complexities of his own making.
      — E. W. Dijkstra
```

Abstraction is the process of hiding details. The human brain is relatively bad
at reasoning through complexity. As you will see, computer programs become pretty
complex rather quickly and it is hard for the human brain to keep up. The job of
a programmer is to manage the complexity by keeping the program modular and
hiding details. The act of hiding details allows our minds to focus on other
aspects of the program that need attention. Decomposition is a technique that
uses abstraction because it hides details. Go back and look at the two
`laligatSum` solutions. The decomposed one exposes less implementation
details and is easier to reason about.

When you read the decomposed code for `laligatSum`, you don't have to have to think
much about what goes on when we call the `isPrime` function. If `isPrime` is written
correctly then we can pretty much tell exactly what it does just from the function name.
We use abstraction all the time when we declare variables and define functions.
