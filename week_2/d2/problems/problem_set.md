### catBuilder

```js
// Write a function `catBuilder(name, color, toys)` that returns a cat object
// object with the corresponding properties.
//
// Example:
//
// var cat1 = catBuilder('Whiskers', 'black', ['scratching-post', 'yarn']);
// cat1; // => { name: 'Whiskers', color: 'black', toys: ['scratching-post', 'yarn'] }
//
// var cat2 = catBuilder('Nyan', 'rainbow', ['poptarts']);
// cat2; // => { name: 'Nyan', color: 'rainbow', toys: [ 'poptarts' ] }
```

### printObject

```js
// Write a function `printObject(obj)` that prints out all key-value pairs of an
// object. HINT: use a for loop.
//
// Example:
//
// var bootcamp = {
//  name: 'App Academy',
//  color: 'Red',
//  population: 120,
// };
//
// printObject(bootcamp); // prints
//
// `name - App Academy`
// `color - Red`
// `population - 120`
```

### getFullname

```js
// Write a function `getFullname(person)` that takes in an person object and returns
// a string containing their full name.
//
// Examples:
//
// var p1 = {firstName: 'John', lastName: 'Doe'};
// getFullname(p1); // => 'John Doe'
//
// var p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
// getFullname(p2); // => 'Charlie Brown'
```

### valuePair

```js
// Write a function `valuePair(obj1, obj2, key)` that takes in two objects
// and a key (string). The function should return an array containing the
// corresponding values of the objects for the given key.
//
// Examples:
//
// var object1 = {name: 'One', location: 'NY', age: 3};
// var object2 = {name: 'Two', location: 'SF'};
//
// valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
// valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
```

### doesKeyExist

```js
// Write a function `doesKeyExist(obj, key)` that takes in an object and a key and
// returns true if the key is inside the object and false if the key is not inside
// the object.
//
// Examples:
//
// var obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}
// doesKeyExist(obj1, 'course'); // => true
// doesKeyExist(obj1, 'name'); // => false
```

### adults

```js
// Write a function `adults(people)` that takes in an array of person objects.
// The function should return an array containing the names of those who have
// an age of 18 or higher.
//
// Example:
//
// var ppl = [
//   {name: 'John', age: 20},
//   {name: 'Jim', age: 13},
//   {name: 'Jane', age: 18},
//   {name: 'Bob', age: 7}
// ];
//
// adults(ppl); // => [ 'John', 'Jane' ]
```

### hasFavoriteFood

```js
// Write a function `hasFavoriteFood(obj, food)` that takes in an object and a food string.
// The function should return true if the object has that favorite food. See the examples
// below.
//
// Examples:
//
// var dog = {
//   name: 'Fido',
//   favoriteFoods: ['chicken', 'sausage', 'scooby snacks']
// }
//
// hasFavoriteFood(dog, 'sausage'); // => true
// hasFavoriteFood(dog, 'cat food'); // => false
//
// var person = {
//   name: 'Al',
//   favoriteFoods: ['pizza', 'burgers', 'ramen']
// }
//
// hasFavoriteFood(person, 'burgers'); // => true
// hasFavoriteFood(person, 'fish'); // => false
```

### countScores

```js
// Write a function `countScores(people)` that takes in an array of score
// objects (people) as its input. A score object has two key-value pairs:
// a name (string) and a score (number). `countScores(people)` should
// return an object that has key-value pairs where each name is a key and
// the value is their total score.
//
// Example 1
//
// var ppl = [ {name: "Anthony", score: 10},
//             {name: "Fred", score : 10},
//             {name: "Anthony", score: -8},
//             {name: "Winnie", score: 12}];
//
// var countPpl = countScores(ppl);
// countPpl; //=> { Anthony: 2, Fred: 10, Winnie: 12 }
//
// Example 2
//
// var peeps = [
//   {name: "Anthony", score: 2},
//   {name: "Winnie", score: 2},
//   {name: "Fred", score: 2},
//   {name: "Winnie", score: 2},
//   {name: "Fred", score: 2},
//   {name: "Anthony", score: 2},
//   {name: "Winnie", score: 2}
// ];
// countScores(peeps); //=> { Anthony: 4, Fred: 4, Winnie: 6 }
```

### Debug the Program

```js
var cat = {
  sound : "Meowr",
  purr : function() {
    return (sound + "..." + sound);
  }
}

cat.purr() === "Meowr...Meowr";
```

### Predict The Output

```js
var dog1 = { name: 'Rover', age: 2 };
var dog2 = { name: 'Curie', age: 7 };
var dog3 = { name: 'Maxie', age: 15 };

var dogs = [dog1, dog2, dog3];

function howOld(array) {
  var result = [];

  for (var i = 0; i < array.length; i += 1) {
    var element = array[i];

    if (element.age < 7) {
      sentence = element.name + " is " + element.age + " years young.";
    } else {
      sentence = element.name + " is " + element.age + " years old.";
    }

    result.push(sentence);
  }

  return result;
}

howOld(dogs);
```
