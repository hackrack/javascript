## JavaScript vs Ruby

Now that you have learned a decent amount of JavaScript, you may be thinking to yourself
"Phew, that was rough. Will learning another programming language be just as hard?".
You'll be relieved to know that the answer to that question is no! The first programming
language you learn is guaranteed to be the hardest. This is because when writing
code for the first time, you are learning core programming concepts while also learning
how to express those concepts using proper JavaScript syntax. When you learn new languages
you *already* have programming concepts down. You will only need to adjust and learn *how* to
*express* these concepts in new syntax.

As you move on in your programming career, you'll be forced to adapt and learn new
languages and technologies. Don't be daunted by this! Trust us, now that you are
comfortable with JavaScript, you'll be fine learning Ruby, Python, C languages, and
much more. From one language to the next, the programming foundation you learned
in JavaScript will carry over to other languages. For example, most programming languages
feature the concepts of variables, functions, scope, arrays, etc..

With that in mind, let's draw a comparison between JavaScript and Ruby. App Academy's
immersive curriculum features both of these languages. Virtually all bootcamps will
allow you to complete their technical tests in JavaScript, but it doesn't hurt
to get your feet wet in other languages.

### sayHello Function

In JavaScript we write functions. In Ruby we write functions. We just write them
using different syntax. Let's explore a simple function:

```js
// JavaScript
function sayHello(name) {
  console.log("hello " + name);
}

sayHello("javascript"); // prints 'hello javascript'
```

```ruby
# Ruby
def sayHello(name)
  puts "hello " + name
end

sayHello("ruby")  # prints 'hello ruby'
```

Some syntax differences to notice in the Ruby code above are:

+ `def` instead of `function` to define a function
+ `puts` instead of `console.log` to print
+ `end` instead of curly braces to close a block or function
+ `#` instead of `//` to denote a comment
+ lack of semicolons

These differences are superficial. The core concepts of functions, arguments, and
expression evaluation are still present.

### evenRange Function

Let's throw in some arrays and loops. What similarities/differences do you spot between
these two functions below?

```js
// JavaScript
function evenRange(min, max) {
  var range = [];
  var i = min;

  while (i < max) {
    if (i % 2 === 0) {
      range.push(i);
    }

    i += 1;
  }

  return range;
}

evenRange(4, 12); // => [4, 6, 8, 10]
```

```ruby
# Ruby
def even_range(min, max)
  range = []
  i = min

  while i < max
    if i % 2 == 0
      range << i
    end

    i += 1
  end

  return range
end

even_range(4, 12) # => [4, 6, 8, 10]
```

Some more syntax differences to notice in the Ruby code above are:

+ lack of parentheses `()` in structures like while and if
+ lack of `var` when declaring variables
+ `==` instead of `===` to check for equality
+ `array << ele` instead of `array.push(ele)` to add an element to an array

A small style preference used in ruby is `snake_case` instead of `mixedCase` when
naming functions and variables.

Other than these bits, you should feel quite at home reading this Ruby code.
Tada! You now know two programming languages.
