## JavaScript Data Types

Before we start manipulating data in our code, we first have to understand what data types exist. JavaScript provides 5 primitive data types for us to use:

* Numbers
  * `0`, `7`, `-42`, `0.5`, etc.
* String (text)
  * `'hello'`, `'Bootcamp Prep!?!'`, `'365'` etc.
* Boolean
  * `true` and `false`
* Undefined
  * `undefined`
* Null
  * `null`

### undefined vs null

Undefined and Null are two data types may stand out as strange. `undefined` and `null` are unique data types in JavaScript
because they only have single values. We will be seeing `undefined` frequently as the "default" value of
 a lot of things throughout the course. `null` is a value that we will use to represent "emptiness" or "nothingness".

It may seem that `undefined` and `null` mean the same thing. Shouldn't the default value of something be
considered "empty" anyways? Great question. We'll gain more context as to where we encounter `undefined` vs `null` further in the course, but the short story is this: JavaScript will automatically make things `undefined` by default. We as programmers will explicitly make things `null`. By having two different values, we can easily differentiate between what was automatically set by JavaScript and what we set ourselves.

### NaN

`NaN` stands for "not a number". This is the result of any illegal numerical
operations. Type the below in your console:

```
> 20 * "happy"
NaN
```

### Operators and Methods

Operators are the symbols we use to perform specific operations. For example,
plus `+` is the addition operator for numbers. We use operators to write expressions.
Expressions evaluate to values. For example: the expression `1 + 1` evaluates to
`2`.

### Numbers and Mathematical Operators

A JavaScript number is pretty much any number that you can think of. Unlike other
programming languages, JavaScript has only a single `Number` type. No distinction
is made for integer numbers, decimal numbers, etc..

**Did you know?** Negative zero (`-0`) is a number value in JavaScript. Weird.

In JavaScript, math expressions follow the same order of operations as regular math
(parentheses, multiplication-division, addition-subtraction).

### Operators

* `+` (addition)
* `-` (subtraction)
* `*` (multiplication)
* `/` (division)
* `%` (modulo)

```js
> 10 + 2
12

> 12.5 - 9
3.5

> 2 * 0
0

> -100 / 10
-10
```

### Modulo Operation

All the JavaScript math operations above are the simple operations you use
everyday, except for maybe modulo `%`. **Modulo gives us the remainder that results
from a division.** For example, `10 % 3` is 1 because when we divide 10 by 3, we are
left with a remainder of 1. We can read `10 % 3` as "ten modulo three" or "ten
mod three."

```js
> 10 % 3
1

> 14 % 5
4

> 20 % 17
3

> 18 % 6
0

> 0 % 4
0
```

Modulo is a very useful operation in the realm of computers. We can use it to check
the divisibility of numbers, whether numbers are even, whether they are prime, and
much, much more. Don't take this seemingly simple operation from granted!

In the order of operations, modulo has the the same precedence as multiplication/division. So our complete
order of math operations in JS is parentheses, multiplication-division-modulo, addition-subtraction.

```js
> 4 + 12 % 5    // modulo has precedence over addition
6
> (4 + 12) % 5  // parentheses have precedence over modulo
1
```

### A Modulo Pattern

Modulo behaves in a very particular way. For example, if we modulo any number by 3,
there are only a few possible results: 0, 1, and 2. Likewise, if we modulo any
number by 12, the only possible results are: 0, 1, 2, ..., 11.

```js
> 0 % 3
0

> 1 % 3
1

> 2 % 3
2

> 3 % 3
0

> 4 % 3
1
```

This should make sense though, since **modulo is the remainder of a division**. If we
divide by a number, the **remainder** must be less than that number! Let that
marinate for a bit, this will be useful later in the course.

### Comparison Operators

* `>` (greater than)
* `<` (less than)
* `>=` (greater than or equal)
* `<=` (less than or equal)
* `===` (equal)
* `!==` (not equal)

### Comparison Expressions

We use comparison operators to check the value of data relative to other data:

```js
> 10 > 5
true

> 7 <= 7
true

> 12 >= 11
true

> 5 === -5
false

> 5 !== -5
true

> "bootcamp" === "bootcamp"
true

> "bootcamp" === "prep"
false
```

Notice that a comparison expression always evaluates to a boolean value (`true` or
  `false`). Comparison operators like `===` are also useful to compare strings,
  booleans, etc. not just numbers.

**Did you know?** `'a' < 'b'` is valid JS code? When you relatively compare strings
using `>` or `<` you will be comparing them lexicographically. Lexicographically is
 fancy shmancy talk for "dictionary" order!

### Booleans and Logical Operators

Logical operators are used to do `Boolean` operations. Recall that the only boolean
values are `true` and `false`. There are 3 main logical operations: **AND**, **OR**,
and **NOT**. The result of a logical expression is another boolean value. Check
out the tables below:

</br>
### && (AND)

| A     | B     | A && B |
|-------|-------|--------|
| false | false | false  |
| false | true  | false  |
| true  | false | false  |
| true  | true  | true   |

</br>
### || (OR)

| A     | B     | A &#124;&#124; B |
|-------|-------|--------|
| false | false | false  |
| false | true  | true   |
| true  | false | true   |
| true  | true  | true   |

</br>
#### ! (NOT)

| A     | !A    |
|-------|-------|
| true  | false |
| false | true  |

Feel free to play around with these logical operations in the REPL. We can use these
operations to build some more complex logic:

```js
> !true
false

> !!true
true

> true || false
true

> false && true
false

> !(false && true)
true

> (5 > 0) && (-2 < 0)
true
```

### Strings and String Methods

Strings are just text (think of it as a string of characters). Strings can consist
of any characters you see on your computer letters, numbers, symbols, punctuation,
etc.. Strings are always wrapped in quotation marks `'` or `"`.

**Did you know?** JS strings can be wrapped in either single `'` or double `"`
quotes. Just be sure to be consistent with what type quotes you open and close with.
Why is this useful? Maybe I want a string that *contains* quotation marks. Like

`'Shakespeare wrote, "To be, or not to be"'`, the single quotes are used to enclose the string.

### Indexing Strings

Strings consist of multiple characters. These characters are numbered by **indices**
starting at 0. So in the string `'bootcamp'`, `'b'` is at index 0, `'o'` is at index
1, `'o'` is at index 2, `'t'` is at index 3, and so on. We can look at particular characters
of a string by using `[]` and specifying an index.

```js
> var str = 'bootcamp'
undefined

> str[0]
'b'

> str[3]
't'

> str[7]
'p'

> str[100]
undefined
```

In general, when we index a string using the expression `string[i]`, we get back the **single character** at position `i`.

**Did you know?** Other programming languages (like C++) have two distinct data types for single character and string data. In
JS, the String data type encompasses single character data. In other words `'b'` is a string that contains only 1 character.

**DOUBLE did you know?** In other programming languages (like C++), using an invalid index with a string will crash your program
with an error. JavaScript is awesome because it handles this issue gracefully by simply giving us back `undefined` (see the previous `str[100]` example).

**TRIPLE did you know?** You should be very grateful that we are not teaching C++ :)

### Common String Methods

A method is a procedure we can use on some data. We will learn more in-depth what
methods are later in the course. But for now, let's see some simple methods we can
use on strings.

* `String.prototype.toLowerCase`
* `String.prototype.toUpperCase`
* `String.prototype.indexOf`
* `String.prototype.slice`
* `String.prototype.length`
* `+` (concatenation)

You may be wondering what `String.prototype` means. Don't be intimidated by the
terminology for now. All it entails is that any string data can use the
`toLowerCase` method. Notice how the methods are spelled and the exact
capitalization. If we want to use these methods, we must specify them exactly how they are - just like how JavaScript is picky with variable names!

Let's mess around with some strings:

```js
> 'app academy!'.toUpperCase()
'APP ACADEMY!'

> 'hello'.indexOf('e')
1

> 'hello'.indexOf('lo')
3

> 'hello'.indexOf('zoo')
-1

> 'hello'.indexOf
[Function: indexOf]
```  

You may notice that to use the string methods above, we must use parentheses `()`.
If we fail to use `()` we will not run the method. By using `()` we are *calling* the method. More on this later on.

`slice` is handy string method we can use to get a piece of a string. Like all string
methods, slice does not modify the existing string, it returns a new string. To call
slice we specify the the start and end indices to slice. The ending index is
*exclusive*. If we call slice and pass in only the start index, it will return the
rest of the string. See these example calls:

```js
> 'hello'.slice(1,4)
'ell'

> 'hello world'.slice(2)
'llo world'
```

`length` is a string property we can use to get the number of characters in a
string. To use it, we do not need parentheses:

```js
> var str = 'hello'
undefined

> str.length
5

> str[str.length - 1]
'o'

> str[4]
'o'
```

**Did you know?** The last character of any string is at index `str.length - 1`. This makes since because the index of the first character is always `0`!

## Falsey vs Truthy

`Boolean` is one of our data types, but every value has a "boolean identity".

`false`, `0`, empty strings (`''`), `undefined`, `null`, and `NaN` are all considered
"falsey" values.

Everything else is "truthy".

Notice that this means the string `'false'` is actually a truthy value (because it
is a non-empty string!). We can check whether data is truth or falsey by using the
`Boolean` function:

```
> Boolean(0)
false
> Boolean(42)
true
> Boolean("hello")
true
> Boolean("")
false
> Boolean(undefined)
false
> Boolean(null)
false
```
