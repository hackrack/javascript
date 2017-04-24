## Debugging

**Debugging** is the process of fixing any mistakes (bugs) in our code. It is an
essential skill to hone as a programmer.

### Common Error Types

#### `SyntaxError`

Incorrect JavaScript syntax. A syntax error is a matter of using incorrect language. To
communicate with our computers, we must "speak" to them through a language they
understand (like JS). For example, incorrectly matching symbols like braces and parentheses will
lead to this common error.

```js
// missing brace
function foo()
  console.log('I am foo');
}
```

```js
var = 42;
// missing variable name
```

#### `ReferenceError`

The variable referred to does not exist. Be careful writing variable names,
they are case sensitive.

```js
var myNum = 42;
console.log(num);
// `num` is a undeclared variable
```

#### `TypeError`

Using a data type incorrectly. Double check your variables to make sure they are
the type you think they are!

```js
var myNum = 42;
myNum("hello");
// cannot call a number like a function
```

### Reading Error Messages

You may have noticed that some errors in our code will prevent code being run at
all. Let's run this program with a glaring syntax error:

```js
// debuggingDemo.js
console.log('Hello');
var = 42;
```

When we try to run this file, we get an error message that starts like this:

```
/Users/Instructor/Desktop/debuggingDemo.js:2
var = 42;
    ^
SyntaxError: Unexpected token =
```

1.  The first line in the error message will be about *where* the error occurred. My file
is located in the folder `/Users/Instructor/Desktop/`.

2. After the name of
our file is the *line number* that JavaScript is complaining about and the line of code, in this
case it is line `2`. **The line number in error messages is not necessarily where the issue is.** In fact, the issue may be nowhere near that line number.

3. Finally, we are told the *type* of error.


### Avoid Bugs (in style!)

```
The computing scientist’s main challenge is not to get confused by the complexities of his own making.
        — E. W. Dijkstra
```

The best way to debug your code is to avoid bugs in the first place! Good style
can help prevent bugs because it will make mistakes obvious. Style makes little difference
in how the computer interprets out code, but it eases our own understanding of our code.
For example, we indent code a particular way so it is easy to spot what code is in which
structures. This can help us spot misplaced lines or missing braces. If you are trying to debug
code that is hard to follow, consider refactoring (rewriting) it. Use good style, descriptive
variable names, and decompose complex problems into helper functions!

### Debug by Printing (`console.log`)

```
The most effective debugging tool is still careful thought, coupled with judiciously placed print statements.
        — Brian W. Kernighan
```

A bug is usually caused by a discrepancy in what we *think is happening* vs what
*is actually happening* in our code. Luckily we have a handy tool, `console.log`,
that allows us to peek inside our variables and check what values they contain. As you
debug, print the values of all essential variables like counters, parameters, etc..
You'll be surprised at what you may have missed! `console.log` is one of the first
tools we learned to use, but don't take it for granted, it will become your bread and
butter to debugging tool for the rest of your career.

### Don't be Afraid to Start Over

```
One of my most productive days was throwing away 1000 lines of code.
      — Ken Thompson
```

Don't fall into the trap of trying to debug a round-about, messy solution so it works.
Sometimes it's better to go back to the drawing board rethink your strategy. Don't
settle for a convoluted solution.
Even if you decide to stick with your current strategy, consider rewriting the code
anyways. If you start fresh, the second time you attempt the problem you may spot an
aspect you didn't see on your initial attempt.

Can you spot what's wrong with this loop?

```js
for(var i = 0; i < 10; i += 1); {
  console.log(i);
}
```

The above code incorrectly prints out `10` and not `0` through `9`.
It may not be obvious when you look at it, but when you rewrite this loop on your
own, chances are you'll fix the issue.

### General Debugging Tips

+ Start with the error message if there is one. Be sure that you are running the
correct file from the correct location. This is easy to overlook so don't get
fooled by running the wrong file!

+ Keep the error type in mind as you scan through your code, but be aware that there
may be multiple issues in your code though.

+ Start at the error line number, but don't get tunnel vision. The problem in your
code may be somewhere else completely, so be ready to check other parts of our code.

+ If you don't get an error message but a your program gives an incorrect output,
think about **how** that output came to be. Did you print out a variable? -Where does
that variable get assigned it's value? Did you get an infinite loop? -How does the
loop counter change over time? Etc..

+ Use `console.log` to check the values of your variables. Make sure they are what
you expect them to be.

+ Avoid guessing and checking! Be methodical and understand **why** your code gave
you an incorrect result before you try to fix it.
