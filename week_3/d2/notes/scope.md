## Scope

### What is Scope?

A **scope** is a section in your program where a name binding is considered valid. A
*name binding* is when a variable (a name) evaluates to a certain value. If we
declare `var myName = 20;`, this binding will only be valid in the scope where
we declared it. We can have nested scopes, but we'll see that in a little bit.

When we declare a variable in a certain scope, it will evaluate to specific value
in that scope. All along we have been using the concept of scope in our code. Now
we are just giving this concept a name! Take a look at this painfully obvious example:

```js
var myName = 'bootcamp prep';

console.log(myName);
// this `myName` references the `myName` variable from this scope,
// so `myName` will evaluate to 'bootcamp prep'
```

The variable `myName` from above is not inside a function, it is just lying out in
open in our code. The `myName` variable is part of **global** scope. Global scope
is the largest scope that exists, it is the outermost scope that exists.

### Function Scope

In JavaScript, we have function scope. That means that when we enter a function,
we enter a new scope:

```js
// global scope
var myName = 'global';

function function1() {
  // function1's scope
  var myName = 'func1';
  console.log('function1 myName: ' + myName);
}

function function2() {
  // function2's scope
  var myName = 'func2';
  console.log('function2 myName: ' + myName);
}

console.log('global myName: ' + myName); // global scope
function1();
function2();
console.log('global myName: ' + myName); // global scope
```

In the code above we are dealing with three different scopes, the global scope, `function1`,
and `function2`. Since these are separate scopes, we *are* allowed to reuse variable names
without any issues. Each scope has it's own `myName` variable.

We refer to the outermost scope as **global scope**. Every function has it's
own **local scope**.

### Scoping Variables

A key scoping rule in JavaScript is the fact that an *inner* scope does have access
to variables in the *outer* scope:

```js
var myNum = 22;

function f1() {
  console.log(myNum);
}

f1(); // prints 22
```

In the code above, notice that function `f1` does not cause a reference error when
called. `f1` will print out the global `myNum`, because `f1` lives inside of the global scope.

Hmmm, `f1` does not have a `myNum` variable declared inside of it, so what happens when we
refer to `myNum` inside of `f1`? If that variable is not found in the immediate scope,
JavaScript will keep searching outer and more outer scopes until it finds a variable
name that matches the one we are referencing. Once it finds the first matching variable,
it will stop searching.

Let's nest some functions to get some nested scopes and see this concept in action:

```js
var myFavoriteFood = "pizza";

function outer() {
  var myFavoriteFood = "ramen";

  function inner() {
    console.log(myFavoriteFood);
  }

  inner();
}

outer();
```

In the code above, the `inner` function will print out `'ramen'` and not `'pizza'`,
because JavaScript will first start looking through the inner scopes and work
it's way outward. `'ramen'` is the innermost `myFavoriteFood` variable found!

This scoping rule only works in one direction. An inner scope **can** reference outer
variables, but an outer scope **cannot** reference inner variables:

```js
function func() {
  var name = 'bootcamp prep';
}

func();
console.log(name);
// reference error!
// name is only defined in the inner func scope, we cannot access it
// from the outer global scope.
```

### Importance of `var`

You may have noticed that declaring variables with the `var` keyword is optional.
If not, go ahead and initialize a variable without using it:

```js
num = 2017;
console.log(num); // prints 2017
```

In some instances omitting the `var` keyword will not have any ill effects on our code.
However, be aware that something particular is happening when we use the `var` keyword.
The `var` keyword attaches the variable to the current scope. Failure to use `var` will
attach the variable to the global scope.

Let's see what happens when we run this example. Notice the lack of the `var` keyword
inside of `func`:

```js
var myVar = 'App Academy';  // global scope

function func() {
  myVar = 'Bootcamp Prep';  // this reassigns the global `myVar`
}

console.log('myVar before: ' + myVar);  // global scope
func();
console.log('myVar after: ' + myVar);   // global scope
```

The code above gives us this output:

```
myVar before: App Academy
myVar after: Bootcamp Prep
```

The line `myVar = 'Bootcamp Prep'` is overwriting the global myVar because we didn't
declare it with the `var` keyword!

### Polluting The Global Namespace

If we don't have any global variables, you may be asking yourself if using `var`
in functions is still necessary? Why yes, yes it is.

JavaScript has a single global scope, which means all of the files from your
projects and any libraries you use will be sharing the same scope. Every time a
variable is declared on the global scope, the chance of a name collision increases.
If we are unaware of the global variables in our code, we may accidentally overwrite
variables.

Limiting global variables will also help use create code that easily maintainable.
Strive to write your functions so that they are self-contained and not reliant
on outer variables. This will also help us test each function by itself.

We often don't know all of the code that goes into a library, so our job is to
limit the number of globally declared variables in our code as much as possible,
to avoid accidental collisions.

* If we don't use `var` in our functions, we are *polluting* the global namespace.
* Every time we declare a function globally, we are *polluting* the global namespace.

We'll talk about some techniques to mitigate this later in the course, but for
now it is enough to know about this risk. Don't expose variables to the global scope
if they don't need to be there. Remember how we like to use abstraction? Only expose 
we need to, and hide complexity from the global scope!
