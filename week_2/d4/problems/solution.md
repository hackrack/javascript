## What Would JavaScript Do?

#### 1.
```js
var str = "happy";
str.split("").slice(0 + 1, 2 + 3); // WWJD?
```

WWJD:
```js
"happy".split("").slice(0 + 1, 2 + 3) //=>
[ 'h', 'a', 'p', 'p', 'y' ].slice(0 + 1, 2 + 3) //=>
[ 'h', 'a', 'p', 'p', 'y' ].slice(1, 2 + 3) //=>
[ 'h', 'a', 'p', 'p', 'y' ].slice(1, 5) //=>
[ 'a', 'p', 'p', 'y' ]
```

#### 2.
```js
var str = "abcdef";
var letter = "e";
str.split("").indexOf(letter) === -1; // WWJD?
```

WWJD:
```js
"abcdef".split("").indexOf(letter) === -1 //=>
[ 'a', 'b', 'c', 'd', 'e', 'f' ].indexOf(letter) === -1 //=>
[ 'a', 'b', 'c', 'd', 'e', 'f' ].indexOf("e") === -1 //=>
4 === -1 //=>
false
```

#### 3.
```js
var ary = ["cat", "in", "the", "hat"];
ary.join(" ").toUpperCase().toLowerCase(); // WWJD?
```

WWJD:
```js
["cat", "in", "the", "hat"].join(" ").toUpperCase().toLowerCase() //=>
'cat in the hat'.toUpperCase().toLowerCase() //=>
'CAT IN THE HAT'.toLowerCase() //=>
'cat in the hat'
```

## Debug These Programs

```js
function howHigh(height) {
  return (height + " feet high!");
}

function jump(height) {
  return "I'm jumping " + howHigh(height);
}

jump(5); //=> "I'm jumping 5 feet high!";
jump(12); //=> "I'm jumping 12 feet high!";
```
-----------------------------------------------------

```js
function unique(array) {
  var uniqueArray = [];

  for (var i = 0; i < array.length; i += 1) {
    var ele = array[i];

    if (uniqueArray.indexOf(ele) === -1) {
      uniqueArray.push(ele);
    }
  }

  return uniqueArray;
}

unique([1,23,2,4,5,1,23]) //=> [1, 23, 2, 4, 5];
```
-----------------------------------------------------
```js
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

    if (isHappy(person)) {
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

isHappyGroup(people); //=> true
```
-----------------------------------------------------
```js
var magicify = function(number) {
  return number - 34;
}

var isMagicNumer = function(number) {
  var magicNumb = magicify(number);

  if (magicNumb % 13 === 0 || magicNumb < 0) {
    return true;
  }

  return false;
}

isMagicNumer(26); //=> true
isMagicNumer(50); //=> false
```
-----------------------------------------------------
```js
function fizzBuzz(max) {
  var i = 1;
  var array = [];

  while (i < max) {
    if ((i % 5 === 0 || i % 3 === 0) && (i % 15 !== 0)) {
      array.push(i);
    }
    i += 1;
  }

  return array;
}

fizzBuzz(19) //=> [3, 5, 6, 9, 10, 12, 18]
