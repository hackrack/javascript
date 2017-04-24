```js
4 + 4 / 2                     // => 6
(2 + -7) * 3                  // => -15
101 % 10                      // => 1
12 - 4 % 3                    // => 11
true && false                 // => false
true && !(false || false)     // => true
!true && !(false || false)    // => false
'cat' + 'dog'                 // => 'catdog'
2 + 'pizza'                   // => '2pizza'
2.5 * 'fish'                  // => NaN
5 >= 11                       // => false
5 === 5.0                     // => true
7 !== 7.1                     // => true
5 + 5 > 8                     // => true
6 + 6 !== 12                  // => false
2 > 1 || false                // => true
'true' === true               // => false
10 % 2 === 0                  // => true
21 % 2 === 0                  // => false
21 % 2 !== 0                  // => true
21 % 2 === 1                  // => true
12 % 3 === 0                  // => true
9 % 3 === 0                   // => true
14 % 3 === 0                  // => false
'new york'[0]                 // => 'n'
'new york'[1]                 // => 'e'
'san francisco'[2 * 3]        // => 'a'
'bootcamp'[3].toUpperCase()   // => 'T'
'bootcamp'.indexOf('T')       // => -1
'bootcamp'.indexOf('camp')    // => 4
'bootcamp'.indexOf('o') > -1  // => true
'science'.indexOf('x') === -1 // => true
```

```js
// 1
var idx = 'abcde'.indexOf('D');
idx = idx + 11;
console.log(idx); // 10
idx * 2;
console.log(idx); // 10
```

```js
// 2
var num = 33;
var isEven = num % 2 === 0;
console.log(isEven); // false
console.log(!isEven); // true
```

```js
// 3
var str1 = 'marker';
var num = 'whiteboard'.length - str1.length;
console.log(num); // 4
var str2 = 'bootcamp';
console.log(str2[num].toUpperCase()); // C
var char = str2[num].toLowerCase(); // c
console.log(char + '!'); // c!
```

```js
// 4
var sentence = 'welcome to bootcamp prep';
var lastChar = sentence[sentence.length - 1];
console.log(lastChar); // p
console.log(sentence.indexOf(lastChar)); // 18
```

```js
// 5
var age = 30;

if (age > 30) {
  console.log('older than 30');
} else {
  console.log('younger than 30'); // prints
}
```

```js
// 6
var str = 'pizza';

if (str.length > 10) {
  console.log('long string');
} else {
  console.log('short string'); // prints
}
if (str[0] === 'p') {
  console.log('starts with p'); // prints
}
```

```js
// 7
var num = 15;

if (num % 3 === 0) {
  console.log('divisible by 3'); // prints
} else if (num % 5 === 0) {
  console.log('divisible by 5');
}
```

```js
// 8
var num = 15;

if (num % 3 === 0) {
  console.log('divisible by 3'); // prints
}
if (num % 5 === 0) {
  console.log('divisible by 5'); // prints
}
```

```js
// 9
var str = 'App AcademY';

if (str[0] === str[0].toUpperCase()) {
  console.log('starts with a capital!'); // prints
}
if (str[str.length - 1] === str[str.length - 1].toUpperCase()) {
  console.log('ends with a capital!'); // prints
}
```

```js
// 10
var num = -44;

if (num > 0) {
  console.log('positive');
} else if (num < 0) {
  console.log('negative'); // prints
} else {
  console.log(0);
}
if (num % 2 === 0) {
  console.log('even'); // prints
} else {
  console.log('odd');
}
```
