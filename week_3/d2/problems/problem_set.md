### Read the Programs

Predict what these programs will print out. Check your work by running the
code.

```javascript
var foo = 5;

function bar() {
  var foo = "Anthony";
  foo + " is home";
  return foo;
}

console.log(foo); //What is foo on this line?
console.log(bar()); //What is bar() on this line?
console.log(foo); //What is foo on this line?
```
-------------------------------------------------------------------------------
```javascript
var foo = 5;

function bar(foo) {
  return foo + 65;
}

console.log(foo); //What is foo on this line?
console.log(bar(5)); //What is bar() on this line?
console.log(foo); //What is foo on this line?
console.log(bar(5)); //What is bar() on this line?
```
-------------------------------------------------------------------------------
```javascript
var foo = "Happy";

for (var foo = 0; foo <= 5; foo += 1) {
  console.log(foo); //What will foo be on each iteration?
}

console.log(foo); //What will foo be on this line?
```
-------------------------------------------------------------------------------
```javascript
var bar = 5;
console.log("1: " + bar); //1: What will bar be on this line?

function foo() {
  var bar = 10;
  console.log("3: " + bar); //3: What will bar be on this line?

  var innerFoo = function() {
    bar = 15;
  }

  console.log("4: " + bar); //4: What will bar be on this line?
}

console.log("2: " + bar); //2: What will bar be on this line?
foo();
console.log("5: " + bar); //5: What will bar be on this line?
```
-------------------------------------------------------------------------------
```javascript
var bar = "dance";

function foo() {
  bar = 10;

  var innerFoo = function() {
    var bar = 15;
  }

  console.log("2: " + bar); //2: What will bar be on this line?
  innerFoo();
  console.log("3: " + bar); //3: What will bar be on this line?
}

console.log("1: " + bar); //1: What will bar be on this line?
foo();
console.log("4: " + bar); //4: What will bar be on this line?
```

### countOfLetter

```js
// Write a function `countOfLetter(string, char)` that takes in a string and a
// character and returns the number of times that character appears in the string
//
// Examples:
//
// countOfLetter('mississippi', 's'); // => 4
// countOfLetter('MISSISSIPPI', 'p'); // => 2
// countOfLetter('BOOTCAMP', 't'); // => 1
```

### countRepeats

```js
// Write a function `countRepeats(string)` that takes in a string and returns the
// number of letters that appear more than once in the string. You may assume
// the string contains only lowercase letters. Count the number of letters that
// repeat, not the number of times they repeat in the string.
//
// Examples:
//
// countRepeats('alvin'); //=> 0
// countRepeats('aaaalvin'); //=> 1
// countRepeats('pops'); //=> 1
// countRepeats('mississippi'); //=> 3
// countRepeats('hellobootcampprep'); //=> 4
```

### pairsToString

```js
// Write a function `pairsToString(arr)` that takes in an array of pairs. The function
// should return a string corresponding to the pairs. See the examples.
//
// Examples:
//
// var array1 = [
//   ['a', 3],
//   ['b', 1],
//   ['c', 2]
// ];
//
// pairToString(array1); // => 'aaabcc'
//
// var array2 = [
//   ['f', 1],
//   ['o', 2],
//   ['d', 1],
//   ['!', 1]
// ];
//
// pairToString(array2); // => 'food!'
```
