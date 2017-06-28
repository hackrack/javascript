## Data Modeling

Data modeling is the art of structuring data in ways that make sense for our applications.
The same idea can be structured in many different ways and these differences will
affect the complexity of our code.

### Form Follows `function`

Often times you will be given a problem that deals with complex data. For example,
what if we are given an array that contains other arrays (2D arrays)? Or an array
that contains many objects. Let's say we wanted to iterate through each pet in an
array and print a nice message:

```js
var pets = [
  {name: "Fido", type: "dog"},
  {name: "Whiskers", type: "cat"},
  {name: "Snoopy", type: "dog"},
  {name: "Garfield", type: "cat"},
  {name: "Scooby", type: "dog"},
  {name: "Polly", type: "parrot"},
  {name: "Goldie", type: "fish"},
];

// `pets[i]` refers to the i-th element of the array, which happens to be an object
pets[1]; // => {name: "Whiskers", type: "cat"}

function printPets(array) {
  for (var i = 0; i < array.length; i++) {
    // `array[i]` refers to a single pet object from the array
    console.log(array[i].name + ' the ' + array[i].type + ' is number ' + i);
  }
}

printPets(pets);
```

The function above iterates through objects in the array, prints out the
`name` and `type` properties of that object, as well as it's index in the array `i`:

```
Fido the dog is number 0
Whiskers the cat is number 1
Snoopy the dog is number 2
Garfield the cat is number 3
Scooby the dog is number 4
Polly the parrot is number 5
Goldie the fish is number 6
```

**Did you know?** If you pass multiple arguments to `console.log`, it will print
out each argument separated with spaces. This is useful to avoid annoying string
concatenation using `+`. Check out these two ways to print `'bootcamp prep'`.

```js
var str1 = "bootcamp";
var str2 = "prep"
console.log(str1 + ' ' + str2);
console.log(str1, str2);
```

### Good Naming (that's right, again)

The `printPets` array is cool and all, but by creating one more variable, we can
make the code cleaner and more readable!

```js
function printPets(array) {
  for (var i = 0; i < array.length; i++) {
    var pet = array[i]; // `array[i]` is a single pet object, so let's label it
    console.log(pet.name + ' the ' + pet.type + ' is number ' + i);
  }
}
```

Creating and naming variables appropriately is key to handling complex data. As we
read code, a variable will act as a mental note and give us insight into what
data the variable will contain. Seems like the `printPets` function will always
be passed an array containing pets, so maybe it would be better to rename the
`array` parameter to `petArray` or `pets`! But we'll leave that to you.

### Data Modeling Options

Say we have to write a function where we are given an array of items and it has to return
how many times each item appeared in the array. There are many ways to model the notion of a
count.

We could represent the count as a multi-dimensional array:

```js
> var myArray = ["a", "b", "a", "c", "a", "b", "d"];
undefined

> getCount(myArray);
[["a", 3], ["b", 2], ["c", 1], ["d", 1]]
```

We could also represent the count as an object:

```js
> var myArray = ["a", "b", "a", "c", "a", "b", "d"];
undefined

> getCount(myArray);
{ a : 3, b : 2, c : 1, d : 1 }
```

So which one is better? The answer is that there is no "right" answer. It depends
upon the requirements of your system. If the order of the count has to reflect the
order of the elements in the input array, it probably makes sense to use the array
representation because arrays are meant for ordered collections. However, the
object representation is much more succinct and would definitely be easier to write. In
the case of the object, getting the count of `'a'` is as simple as `countObject.a`!

### Data Modeling Scenarios

*  The function should return pairs (or triplets, or quadruplets, etc) of things, it probably makes sense to use a 2D array. The outer array to hold all of the pairs. The inner arrays to hold each pair.

* You have to write a function that asks you to keep track of a robot's location on a 2D
plane. How do we represent that data (robot's location)? We can use 2D arrays to represent a
cartesian plane, but that may be an overkill. We can also initialize two variables (`x` and
`y`) to zero. When the robot moves in the positive direction, increment (or decrement) the
counter associated with that axis. No we have a succinct representation of location
without the weight and complexity of a 2D array.

* Your employer ask you to create a data model of a car. What data structure would you use?
If you thought `Object`, you are correct. Objects are great for modeling complex data
structures.

```js
var car = {
  type : "Tesla",
  mpg : 1000,
  engines: ["Rev4", "Mark22"]
  // etc...
};
```
