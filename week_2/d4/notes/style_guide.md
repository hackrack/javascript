## Bootcamp Prep Style Guide

**Style** refers to the way we write our code. Our goal is to write code in such a way
that it is **readable** and **easily understood**. Good style will help others understand
what you are doing in your code and it will also help you stay organized in your own
brain as you solve a problem. It may seem like a chore to follow these style guidelines,
but good code style can be free points on an bootcamp interview!

This is an outline of some fundamental style guidelines you should
practice whenever you write code.

### Indentation

Indentation is one of the most important aspects of style, especially when our
code is very complex and nested. The rule of thumb is to add an additional indent to
to all the code in the body of a structure. That is, all code inside the braces
of a `if`, `else`, `for`, `while`, `function`, etc. should be indented! If we indent
properly, it is easy to see what code is inside what structures. We are able to easily
spot where a structure ends since the closing braces are always lined up vertically
with the name of the structure:

```js
// Good style:
function skip5(){
  for (var i = 1; i < 10; i += 1){
    if (i === 5) {
      continue;
    }
    console.log(i);
  }
}

// Bad style:
function skip5(){
for (var i = 1; i < 10;i += 1){
if (i === 5) {
  continue;}
console.log(i);
}}

```

### Whitespace
Use a space around operators that use two things like `+`, `*`, `=` , `+=`, `<=`, etc.

```js
// Good style:
var num1 = 3;
var num2 = 5;
if (num1 + num2 === 8) {
  console.log("the sum is 8");
}

// Bad style:
var num1=3;
var num2 =5;
if (num1+num2=== 8) {
  console.log("the sum is 8");
}
```

**Did you know?** Operators that work on two things are called *binary operators*, since they are apply to 2 operands (hence binary).

Don't use a space for operators that use one thing like `++`, `--`, etc..

```js
// Good style:
myNum++;

// Bad style:
myNum ++;
```

**Did you know?** Operators that apply to only a single operand are called *unary operators*

#### Comma spaces

Use a space after `,` in arrays and objects and after `;` in for loops.
```js

// Good style:
var names = ['alvin', 'chase', 'phi', 'eliot'];
var dog = {name: fido, age: 2};
```

### Arrays and Objects

Feel free to break lines in large or complex arrays and objects. Also notice the indentation
used so our objects appear nested:

```js
// good style
var dog = {
  name: 'Fido',

  age: 12,

  favoriteToys: [
    {
      name: 'ball',
      color: 'red',
    },
    {
      name: 'bone',
      color: 'white',
    }
  ]
};

var names = [
  'alvin',
  'chase',
  'phi',
  'eliot'
];
```

### Vertical Space

Use blank lines to section off different logical sections in your code:

```js
// Good style:
function sumArray(arr){
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    var ele = arr[i];
    sum += ele;
  }

  return sum;
}

// Not as good style:
function sumArray(arr){
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    var ele = arr[i];
    sum += ele;
  }
  return sum;
}
```

### Intermediate Variables

Use variables to store values that are tedious to write out over and over again.
This will also increase readability if you choose a descriptive name.

```js
// Good style:
function printStudents(arr) {
  for (var i = 0; i < arr.length; i++) {
    var name = arr[i];
    console.log(name.toUpperCase());
    console.log(name.toLowerCase());
  }
}

// Not as good style:
function printStudents(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i].toUpperCase());
    console.log(arr[i].toLowerCase());
  }
}
```

Use variables to "label" complex expressions. Good variables can act as notes:

```js
// Nice and readable:
var num = 15;
var isDivByEither = (num % 5 === 0 || num % 3 === 0);
console.log(isDivByEither);


// Not as readable:
var num = 15;
console.log(num % 5 === 0 || num % 3 === 0);
```

### Semicolons

Use a semicolon to end lines. You may have noticed that sometimes omitting a semicolon
still allows our code to run. Know that this is the programming environment being
nice to you and secretly filling in your missing semicolons! You should terminate
appropriate lines with `;`.

**Semicolons separate different expressions in our code. This helps JavaScript interpret
our code.**

It is technically "correct" to write all our code on a single line. We break lines
to make our code readable for other humans. However, when we run code on our computers,
the JavaScript interpreter will look for semicolons.

See this example where omitting a semicolon is deadly. It is technically correct
to not break lines, but what happens if we don't use a semicolon:

```js
// Not good style, but still runs:
console.log('hello'); console.log('world');

// Worse style and does not run at all:
console.log('hello') console.log('world')
```

We do not need semicolons on every line that we write. For example we do not need
to put a semicolon after the closing brace `}` of an `if`, etc.. See any code in
our curriculum for examples where to put semicolons.

### Modular Functions

As you program more complex problems, strive to design your functions so that they
relatively simple and focus on a particular task. We should make our functions so that
they are **modular**. If we make our code modular, and each smaller component is correct
and working, then the entire system of our code will be working and easy to maintain. Here's a
rule of thumb: if a function you wrote is large and difficult to follow, consider
decomposing it by creating a helper function.  
