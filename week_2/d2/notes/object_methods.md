## Methods vs Functions

A **method** is essentially a function that belongs to an object. It is referred to
as a method of that object. That means that every method is a function, but not every
function is a method.

+ `myFunc` is a function
+ `myObject.myFunc` is a method of the object `myObject`
+ `myObject["myFunc"]` is a method of the object `myObject`

We know that we can use dot or bracket notation to add key-value pairs to an object.
A method is just a key-value pair where the key is the function name and the value
is the function definition! Let's use what we learned earlier to teach our dogs some tricks
in a few different ways:

```js
var dog1 = {
  name: 'Fido'
};

dog1.bark = function () {
  console.log('bark bark!');
};

dog1['speak'] = function (string) {
  console.log('WOOF ' + string + ' WOOF!!!');
};

dog1.bark(); // prints `bark bark!`
dog1.speak('pizza'); // prints `WOOF pizza WOOF!!!`
```

We can give objects methods when we initialize them:

```js
var dog2 = {
  name: "Rover",

  bark: function () {
    console.log("bork bork!");
  },

  speak: function (string) {
    console.log("BORK " + string + " BORK!!!");
  }
};
// Notice that in the object above, we still separate the key-value pairs with commas.
// `bark` and `speak` are just keys with long-looking values.

dog2.bark(); // prints `bork bork!`
dog2.speak('burrito'); // prints `BORK burrito BORK!!!`
```

Methods are just plain old functions at heart. They can do all those function things
we know such have parameters, return data, etc.. A method is a function that belongs
to an object. To call the method we need to specify **which** object is calling.
Just like `dog.bark()` or more generally `obj.methodName()`.

### **`this`** and Methods

To recap, when a function is a value of an object, it is typically referred to as
a method of that object.

There will be times when you will want a method to refer to the object it belongs to.
The keyword `this` exists in every function and it evaluates to the object that is calling
the method. That sounds abstract, but let's jump into an example:

```js
var dog = {
  name: 'Fido',

  isSitting: true,

  stand: function () {
    this.isSitting = false;
    return this.isSitting;
  }
}

// Fido is starts out sitting
console.log(dog.isSitting); // prints `true`

// Let's make him stand
console.log(dog.stand());   // prints `false`

// He's actually standing now!
console.log(dog.isSitting); // prints `false`
```

Inside of a method, we can use the `this` keyword to refer to the object that is
calling the method! So if we do `dog.stand()` then when we run the code of the `stand`
method, `this` will refer to `dog`.

Still skeptical? Don't take our word for it,
check `this` (heh) out:

```js
var dog = {
  name: 'Fido',

  test: function() {
    return this === dog;
  }
}

var answer = dog.test();
console.log(answer); // prints `true`
```

In short, by using the `this` keyword inside a method, we can refer to values of the object.

## Why are Objects useful?

By using objects the structure of our data can match our semantic understanding of their relationships.
This helps manage the complexity of keeping related data together and makes it easier to reason about
the correctness of our programs:

```js
var bootcamp = {
  name: 'App Academy',

  founders: ['Kush', 'Ned'],

  locations: ['SF', 'NY'],

  students: ['Tommy', 'Fred', 'Meagan', 'Alex'],

  population: 200,

  birthYear: 2012,

  enroll: function(studentName) {
    this.students.push(studentName);
    this.population += 1;
    return this.population;
  }
};

bootcamp.enroll('Daniel');
console.log(bootcamp.students); // prints ['Tommy', 'Fred', 'Meagan', 'Alex', 'Daniel']

```

## Useful Methods

#### **`Object.keys`**

This method accepts an object as the argument and returns an array of all of its keys.

```js
> var dog = {name: "Fido", age: "2"}
undefined

> Object.keys(dog)
['name', 'age']

```

#### **`for (var key in object)`**
We can use special syntax for an object to iterate through each key.
This is useful for looping through the keys and values of an object.
For example:

```js
var obj = {name: "Mihir", age: "twenty-something"};

for (var key in obj) {
  console.log(key);
}

// prints
// `name`
// `age`
```

The example above prints all the keys found in `obj` to the screen. On each iteration
of the loop, the `key`variable will contain a string. If we want to access the values, we would throw some bracket notation into the mix.

```js
var obj = {name: "Mihir", age: "twenty-something"};

for (var key in obj) {
  var value = obj[key];
  console.log(value);
}

// prints
// `Mihir`
// `twenty-something`
```
Here's some food for thought: Why can't we use dot notation to iterate through the values? For
example, what if we replaced `obj[key]` with `obj.key`? Try it for yourself. We can only use
string variables as keys with brackets!

Like all variables, you can name the key variable whatever you like. The hope is
that you name it something descriptive. That being said, code like this will still
iterate through the object:

```js
var dog = {
  name: 'Fido',
  color: 'orange',
  age: 2
};

for (var potato in dog) {
  var value = dog[potato];
  console.log(value);
}

// prints
// `Fido`
// `orange`
// `2`
```
