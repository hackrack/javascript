## Like Array, like String

Arrays and Strings have more in common than you may think. Several earlier (and
lower level) programming languages implemented Strings as Arrays, where each
character is an element in the Array. While this doesn't directly apply to
JavaScript in the same way (i.e. this is no Character data type), it does provide
an explanation as to why Arrays and Strings share many of the same methods:

* `String.prototype.indexOf(str)`
* `String.prototype.concat(str)`
* `String.prototype.slice(startIndex, endIndex)`
* `[]` - indexing

### Mutable vs Immutable

A very important difference between Arrays and Strings lies in their differences in
*mutability*.

Strings are immutable, and cannot be changed:

```js
var str = 'hello';
str[1] = 'x';
str; // => 'hello'
```

Arrays are mutable, and can be changed:

```js
var arr = ['h', 'e', 'l', 'l', 'o'];
arr[1] = 'x';
arr; // => ['h', 'x', 'l', 'l', 'o']
```

We **cannot assign** a character to a specific index in a string, but we **can assign**
an element to a specific index in an array. Strings cannot be modified.

Whoa, but it seems like we modify strings all the time, with methods like `toUpperCase`?
Actually, all those string methods like `toUpperCase`,  *return* a new string and don't
modify the existing string.

```js
var str = 'hello';
var newStr = str.toUpperCase();
newStr; // => 'HELLO'
str; // => 'hello'
```

Even string concatenation gives us a new string.
