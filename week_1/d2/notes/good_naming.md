## Importance of Naming

It is very important that we give our variables and function significant names.
For example, `x` is a very non-descriptive name for a variable or function.
As we tackle more complicated problems and our code grows to be more complex, we
are likely to forget what it originally stood for and its purpose. Non-descriptive
names make our code error-prone. **Great code reads like English and almost explains
itself.**

### It's on the tip of my tongue...

Let's get motivated. What is the purpose of the following function?

```js
function x(n, j) {
  var z = (j / n) * 100;

  if (z < 15) {
    return false;
  } else {
    return true;
  }
}
```

Hmm, it's pretty hard to tell. The function, parameter, and variable names that are
used give us no indication of what is happening. Let's rewrite it and give our data
significant names:

```js
function isGoodTip(mealCost, amountTipped) {
  var percentage = (amountTipped / mealCost) * 100;
  var badTip = 15;

  if (percentage < badTip) {
    return false;
  } else {
    return true;
  }
}
```

Wow. Now that's a whole lot better. The names used in the code above provide much
more clarity as to **what** problem we are trying to solve and **how** we are solving it!

### Why Does Naming Matter?

Whenever you write a piece code, consider the possibility that you will have to come back to
it a year later. Would you be able to understand what is happening in the code? Furthermore, would
*someone else* be able to understand what you wrote? After all, despite popular belief,
programmers do not code in a dark basement by themselves; they work in a team! As programmers, our
goal is to write code that is not only "correct", but also elegant, readable, and maintainable! Hold yourself to this high standard.

### Examples:

Whenever you are naming a variable or a function use a **concise but also descriptive** name.
Aim for that happy medium:

```js
var x = 5 + 5; // not descriptive.

var sumOfFiveAndFive = 5 + 5; // not concise.

var num = 5 + 5; // concise and descriptive! We have a sense of what type data is contained.

var string = 5 + 5; // misleading.

var fish = 5 + 5; // please no, for the love of Bill Gates.
```
