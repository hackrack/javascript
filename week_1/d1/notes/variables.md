## Variables

**Variables** are used to store information to be referenced and manipulated in a
computer program. They also provide a way of labeling data with a descriptive name,
so our programs can be understood more clearly programmers. It is helpful to think
of variables as containers that hold information. Their sole purpose is to label and
store data in computer memory. This data can then be used and even changed
throughout the lifetime of your program.

Everything in JavaScript is evaluated. A **variable** always evaluates to the **value**
it contains! It is as if we can replace anywhere we see the variable name with the
value it contains. Think of them as placeholders.

### Comments

Before we talk about variables, just a comment about comments.

You may often see us write `//` before lines of code. This is how we write comments in our
code. Lines that begin with `//` will not be read by the JavaScript interpreter when we
run our code. Programmers use comments to annotate their code and we will occasionally do the
the same!

```js
// let's do some math
5 + 5;
```

### Declaring Variables

In JavaScript, in order to use a variable, we must *declare* it. Variable
**declaration** is the act of introducing the variable to the environment. When we
declare a variable, we will often *initialize* it to a value.

To declare a variable, use the `var` keyword, followed by a space and then the name
of the variable.

```js
> var myVar;
```

### Variable Assignment and Initialization
To initialize a variable to a value, simply assign the variable to a value when you
declare it using the *assignment operator*, `=`.

**Did you know?:** In programming, an equal sign is used to assign values to variables,
not to indicate equality like it is in math.

Let's create out first variable and play with it in the REPL:

```js
> var myVar
undefined

> myVar     // we can use myVar without error because we declared it.
undefined   // myVar evaluates to undefined because we did not initialize myVar to any value.

> myVar = 5 // let's assign the value 5 to the variable myVar
5

> myVar     // now it will evaluate to 5
5

> myVar + 2 // myVar still evaluates to 5, so `myVar + 2` is really `5 + 2`
7

> myVar     // the variable is still unchanged
5

> var myOtherVar = 10 // we can also declare and assign a variable all at once
undefined

> myOtherVar  // `myOtherVar` evaluates to 10
10
```

Notice that when we declare or initialize a variable, the REPL prints out something
underneath it. This is what the expression evaluates too. Everything in JavaScript
is evaluates to some value! `undefined` is a very common "default" value, but more
on this later.

You may have noticed that in previous code `myVar + 2` evaluated to `7`, but the
value of the variable `myVar` was unchanged. Let's say we actually wanted to add `2`
to `myVar` and save it back into `myVar`. To do this, we need to assign the variable
again.

Check out this example using a better, more descriptive variable name:

```js
> var num = 2
undefined

> num = num + 8
10

> num   // num is actually 10 now!
10
```

Whenever we assign a value to a variable, the data we are assigning must be
evaluated first. For example, to evaluate `num = num + 8` we must first evaluate
the right side, `num + 8`. Once we have evaluated `num + 8` to `10`, then we store
it into the variable called `num`.

### Assignment Shorthand

Changing the value of a number variable is something fairly common in the programming
world. To actually change the variable in such a way we must reassign the variable
with `=`.

Luckily there are some shorthand operators we can use:

```js
> var n = 0
undefined

> n
0

> n += 4  // add 4 to n and save it back to n
4

> n       // n is now 4
4

> n++     // increment n (add 1 to n)
4

> n       // n is now 5
5
```

**Did you know?** The expression `n++` *evaluates* to the original/unchanged value,
but rest assured it does indeed increment the variable. This is why `n++` evaluates
to the unchanged number in the REPL. On the flip side of that,
the expression `++n` *evaluates* to the new/changed value. We refer to these
different ways to increment as postfix (`n++`) and prefix (`++n`).

We can use similar shorthand for other operations too. We have `+=` `-=`, `*=`,
`/=`, `++`, and `--`. Hop into the REPL and experiment with these!


### console.log

`console.log` is the method we will be using to print out data to the screen. `console.log` 
is a great tool because it allows us print out any data or variables we please! 
This allows us to *see* what our data looks like throughout our code. Let's say we had 
the following in a JavaScript file:

```js
var myName = 'bootcamp' + ' ' + 'prep';
console.log(myName); // prints 'bootcamp prep'
console.log(myName + '!!!'); // prints 'bootcamp prep!!!' 
```

When we run the file it will print out the following:

```
bootcamp prep
bootcamp prep!!!
```

Notice that the thing we put inside the parentheses of `console.log` will be evaluated before we print it out.
