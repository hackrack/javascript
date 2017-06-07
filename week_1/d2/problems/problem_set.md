## Coding Problems

For the problems below, write functions that satisfy the examples. Write your code
to a `.js` file so you can save it. Feel free to copy and paste our starter code
snippets into your file. Be sure to test your code by using `console.log` to see what your functions
return!

### isOdd

```js
// Write a function `isOdd` that takes in a number as an argument and returns `true`
// if the number is odd and returns `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
// Examples:
// isOdd(2);    // => false
// isOdd(5);    // => true
// isOdd(-17);  // => true

function isOdd(num) {
  // your code here...
}
```

### plusFive

```js
// Write a function `plusFive` that takes in a number as an argument and returns
// the sum of that number and 5.
//
// Examples:
// plusFive(10);  // => 15
// plusFive(2);   // => 7
// plusFive(-8);  // => -3
//

function plusFive(num) {
  // your code here...
}
```

### threeOrSeven

```js
// Write a function `threeOrSeven` that takes in a number and returns `true`
// if the number is divisible by either 3 or 7 and `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
//
// Examples:
// threeOrSeven(3);   // => true
// threeOrSeven(42);  // => true
// threeOrSeven(8);   // => false
//
function threeOrSeven(num) {

}
```

### hello

```js
// Write a function `hello` that takes in a string and prints out "Hello, " followed
// by the string. HINT: this function doesn't need to return anything, it should
// just print using console.log
//
// Examples:
// hello("child");    // prints "Hello, child"
// hello("Anthony");  // prints "Hello, Anthony"
//
function hello(str) {
  // your code here...
}
```

### yell

```js
// Write a function `yell` that takes in a string and returns a "yelled" version
// of that string.
//
// Examples:
// yell("I want to go to the store"); // => "I WANT TO GO TO THE STORE!!!"
// yell("Time to program"); // => "TIME TO PROGRAM!!!"
//
function yell(string) {
  // your code here...
}
```

### whisper

```js
// Write a function `whisper` that takes in a string and returns a "whispered" version
// of that string.
//
// Examples:
// whisper("Hey Anthony"); // => "...hey anthony..."
// whisper("YEA! that was fun"); // => "...yea! that was fun..."
function whisper(string) {
  // your code here...
}
```

### isSubstring

```js
// Write a function `isSubstring` that takes in two strings, `searchString` and
// `subString`. The function should return `true` if `subString` is a part of the
// `searchString`, `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
// Examples:
// isSubstring("The cat went to the store", "he cat went"); // => true
// isSubstring("Time to program", "time"); // => true
// isSubstring("Jump for joy", "joys"); // => false
//
function isSubstring(searchString, subString) {
  // your code here...
}
```

### echo
```js
// Write a function `echo` that takes in a string and returns that string "echo-ized".
//
// Examples:
// echo("Mom!"); // => "MOM! ... Mom! ... mom!"
// echo("hey"); // => "HEY ... hey ... hey"
// echo("JUMp"); // => "JUMP ... JUMp ... jump"
//
function echo(string) {
  // your code here...
}
```

### isEven
```js
// Write a function `isEven` that takes in a number and returns `true` if the number
// is even, `false` otherwise. Write `isEven` by using the `isOdd` function you
// made previously. HINT: you can call `isOdd` from within `isEven`.
//
// Examples:
// isEven(2); // => true
// isEven(5); // => false
function isEven(num) {
  // your code here...
}
```

## Thinking Problems

These next few problems won't require you to write code, but it will help your understandng of JavaScript.

### Order of Operations

Evaluate each expression. Check your answer in the Node REPL.

`1 + 1 * 5`

`(1 + 1) * 5`

`1 + 2 - 5 / 6 - 1`

`5 * 5 % 13`

`5/(-1 * (5 - (-10)))`

### Truth Table

Based on the values of A and B from the first two 
columns, complete the truth table. Check your work in the REPL.

   A   |   B   | A && B  | A &#124;&#124; B
-------|-------|---------|-----------------
 True  | True  |  True   |      True        
 True  | False |         |                 
 False | True  |         |                 
 False | False |         |                 


### Truthy or Falsey

Predict whether these expressions evaluate to `true` or `false`. Check your work in the REPL.

* `true && true || false`
* `true && (false || true)`
* `(true || false) && (false || false)`
* `(true || false) || (false || false)`
