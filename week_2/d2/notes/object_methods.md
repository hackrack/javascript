NOTE: Understanding the material is not necessary for Bootcamp interviews. Focus on the other object notes. But if you are interested
in things to come at your bootcamp, give this a read.

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
};
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
