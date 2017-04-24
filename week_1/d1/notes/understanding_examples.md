# Understanding Examples

In our Bootcamp Prep notes, you will frequently see JavaScript code
examples throughout. There are two main types of examples we will be seeing in the course:
**Node REPL code** and **JavaScript File code**. These correspond to the two ways we
will run our JavaScript in the course.

### Node REPL Examples

Node REPL examples will have the `>` symbol in them. Just like how you would see
it in an actual REPL session. Remember that we use the Node REPL to test quick
one-liners and such because it tells us exactly what a JavaScript expression
evaluates to after we type it:

```js
> 21 * 2
42
> 'cat' + 'dog'
'catdog'
```

### JS File Examples

Other code examples will be in be JavaScript File code. To run these
examples, save the code in a `.js` file and run it. Notice the lack of `>`
before lines:

```js
function sayHello(name) {
  console.log('Hello, my name is ' + name);
}

// let's call this function to print 'Hello, my name is Bootcamp Prep'
sayHello("Bootcamp Prep");
```

### Command Line Interface (CLI) Examples
Occasionally we will also have examples of the Command Line Interface (Terminal
on Mac or Command Prompt on Windows). CLI examples will start with `$`:

```
$ ls
Desktop
Downloads
Music

$ cd Desktop

$ ls
my_bootcamp_prep
myFile.js
cats.jpeg
```

### Follow Along!

Now that you know how to interpret these different examples, feel free to
follow along with them on your own computer! Be sure to run the examples in the
correct environments.
