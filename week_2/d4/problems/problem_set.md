## What Would JavaScript Do?

Write out all the steps that the JS interpreter would take to evaluate
the specified line. We have filled out number 1 as an example.

#### 1.
```js
var str = "happy";
str.split("").slice(0 + 1, 2 + 3); // WWJD?

// Answer:
"happy".split("").slice(0 + 1, 2 + 3);
['h', 'a', 'p', 'p', 'y'].slice(0 + 1, 2 + 3);
['h', 'a', 'p', 'p', 'y'].slice(1, 2 + 3);
['h', 'a', 'p', 'p', 'y'].slice(1, 5);
['a', 'p', 'p', 'y'];

```
#### 2.
```js
var str = "abcdef";
var letter = "e";
str.split("").indexOf(letter) === -1; // WWJD?
```
#### 3.
```js
var ary = ["cat", "in", "the", "hat"];
ary.join(" ").toUpperCase().toLowerCase(); // WWJD?
```

## Debug These Programs

Debug the programs below so they return the specified results.

```javascript
function howHigh(height) {
  return (height + " feet high!");
}

function jump(height) {
  return "I'm jumping " + howhigh(height);
}

jump(5) //=> "I'm jumping 5 feet high!";
jump(12) //=> "I'm jumping 12 feet high!";
```

-----------------------------------------------------
```javascript
function unique(array) {
  var uniqueArray = [];

  for (var i = 0, i <= array.length, i += 1) {
    var ele = array[i];

    if (uniqueArray.indexOf(ele) === -1) {
      uniqueArray.push(ele);
    }
  }
}

unique([1,23,2,4,5,1,23]) //=> [1, 23, 2, 4, 5];
```
-----------------------------------------------------

```javascript
function isHappy(person) {
  if (person.happiness > 5) {
    return true;
  }
  return false;
}

function isHappyGroup(group) {
  var amount = 0;

  for (var i = 0; i < group.length; i += 1) {
    var person = group[i];

    if (idHappy[person]) {
      amount += 1;
    }
  }

  if (amount > 5) {
    return true;
  }

  return false;
}

var people = [
  { happiness : 15},
  { happiness : 13},
  { happiness : 3},
  { happiness : 20},
  { happiness : 9},
  { happiness : 7},
  { happiness : 17},
  { happiness : 1}
];

isHappyGroup(people) //=> true;
```

-----------------------------------------------------

```javascript
var magicify = function(number) {
  console.log(number - 34);
}

var isMagicNumer = function(number) {
  var magicNumb = magicify(number);

  if (magicNumb % 13 === 0 || magicNumb < 0) {
    return true;
  }

  return false;
}

isMagicNumer(26) //=> true;
isMagicNumer(50) //=> false;
```

-----------------------------------------------------

```javascript
function fizzBuzz(max) {
  var i = 1;
  var array = [];

  while(i < max) {
    if (i % 5 || 3 === 0 && i !== 15) {
      array.push(array[i]);
    }
    i += 1;
  }

  return array;
}

fizzBuzz(19) //=> [3, 5, 6, 9, 10, 12, 18]
```


### capVowels

```js
// Write a function called capVowels(string) that takes in a string and returns
// the string where every vowel is capitalized. All other letters should be lowercased.
// Hint: Don't forget that strings are immutable!
//
// Examples:
//
// capVowels('hello world'); // => 'hEllO wOrld'
// capVowels('HELLO WORLD'); // => 'hEllO wOrld'
// capVowels('boOtCamP PreP'); // => 'bOOtcAmp prEp'
```

### nextTwoPrimes

```js
// Write a function `nextTwoPrimes(num)` that takes in a number `num` and returns the
// next two prime numbers greater than `num`.
//
// Examples:
// nextTwoPrimes(2); // => [ 3, 5 ]
// nextTwoPrimes(3); // => [ 5, 7 ]
// nextTwoPrimes(7); // => [ 11, 13 ]
// nextTwoPrimes(8); // => [ 11, 13 ]
// nextTwoPrimes(20); // => [ 23, 29 ]
// nextTwoPrimes(97); // => [ 101, 103 ]
```

### pairProduct

```js
// Write a function `pairProduct(arr, num)` that accepts an array of numbers (arr)
// and a target number (num). It should return pairs of indices whose elements multiply
// to `num`. No pair should appear twice in the result.
// Use only `while` loops. No `for` loops.
//
// Examples:
//
// pairProduct([1,2,3,4,5], 4); //=> [ [ 0, 3 ] ]
// pairProduct([1,2,3,4,5], 8); //=> [ [ 1, 3 ] ]
// pairProduct([1, 2, 3, 12, 8], 24); //=> [ [ 1, 3 ], [ 2, 4 ] ]
```

### twoDimensionalSize

```js
// Write a function twoDimensionalSize(array) that takes in a 2D-array as an argument.
// The function should return the total number of elements in the 2D-array.
//
// Examples:
//
// var arr1 = [
//   [1, 2, 3],
//   [4, 5],
//   [6, 7, 8, 9]
// ];
//
// twoDimensionalSize(arr1); // => 9
//
// var arr2 = [
//   ['a'],
//   ['b', 'c', 'd', 'e']
// ];
//
// twoDimensionalSize(arr2); // => 5
```

### elementCount

```js
// Write a function elementCount(array) that returns a object. Each key
// corresponds to an element in the array and the value corresponds to how many
// times that element appears in the array.
//
// Example:
// elementCount(["a", "a", "b", "b"]); //=> { "a" : 2, "b" : 2 }
// elementCount(['c', 'a', 'c', 'a', 'b']); // => { "c": 2, "a": 2, "b": 1 }
```

### titleize

```js
// Write a function `titleize(title, stopWords)` that takes in a string `title`
// and an array of strings `stopWords`. Return the `title` where every word that
// does not exist in the `stopWords` array is capitalized; all others lowercase.
//
// Hint: Decompose this problem into helper functions. Perhaps create these,
// - removePunctuation(word)
// - isStopWord(word, stopWords)
//
// var punctuation = [";", "!", ".", "?", ",", "-"];
//
// Examples:
//
// titleize("forest gump, the runner", ["the"])
// => "Forest Gump, the Runner"
//
// titleize("MASTER AND COMMANDER", ["and"])
// => "Master and Commander"
//
// titleize("i LOVE; lover of mine", ["love", "of"])
// => "I love; Lover of Mine"
//
// titleize("shall we dance?", ["dance"])
// => "Shall We dance?"
```

**Hints**
* Test after you write every function of this decomposition!

* First write a function `removePunctuation(word)` that takes in a single word
and returns that same word without any punctuation at the end. Feel free to use the
`punctuation` array we've given you below.
  * HINT: use `Array.prototype.slice`

* Second, write a function `isStopWord(word, stopWords)` that takes in a single
word and returns `true` if it is a stop word. The check will vary depending on
if the `word` contains punctuation or not, so use your `removePunctuation` function
before checking.
