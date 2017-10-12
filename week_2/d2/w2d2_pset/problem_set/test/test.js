/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***************/

var tryRequire = require('../utils/try_require.js');
var assert = require('assert');

var catBuilder = tryRequire('../problems/1_cat_builder.js');
var getFullname = tryRequire('../problems/3_get_fullname.js');
var valuePair = tryRequire('../problems/4_value_pair.js');
var doesKeyExist = tryRequire('../problems/5_does_key_exist.js');
var adults = tryRequire('../problems/6_adults.js');
var hasFavoriteFood = tryRequire('../problems/7_has_favorite_food.js');
var countScores = tryRequire('../problems/8_count_scores.js');
var decomposingFunctions = tryRequire('../problems/9_decomposing_functions.js');
var isPrime = decomposingFunctions.isPrime;
var firstNPrimes = decomposingFunctions.firstNPrimes;
var sumOfNPrimes = decomposingFunctions.sumOfNPrimes;

describe('catBuilder()', function () {
  it('should return a cat object with keys name, color, and toys', function () {
    var cat1 = catBuilder('Whiskers', 'black', ['scratching-post', 'yarn']);
    var cat1Result = {
      name: 'Whiskers',
      color: 'black',
      toys: ['scratching-post', 'yarn']
    };

    var cat2 = catBuilder('Nyan', 'rainbow', ['poptarts']);
    var cat2Result = {
      name: 'Nyan',
      color: 'rainbow',
      toys: ['poptarts']
    };

    assert.deepEqual(cat1, cat1Result);
    assert.deepEqual(cat2, cat2Result);
  });
});

describe('printObject()', function () {
  it('test this function manually', function () {

  });
});


describe('getFullName()', function () {
  it("should return string of the person's full name", function () {
    var p1 = {firstName: 'John', lastName: 'Doe'};
    var p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};

    assert.equal(getFullname(p1), 'John Doe');
    assert.equal(getFullname(p2), 'Charlie Brown');
  });
});


describe('valuePair()', function () {
  it("should return an array containing the corresponding values of the objects for the given key", function () {
    var object1 = {name: 'One', location: 'NY', age: 3};
    var object2 = {name: 'Two', location: 'SF'};

    assert.deepEqual(valuePair(object1, object2, 'location'), [ 'NY', 'SF' ]);
    assert.deepEqual(valuePair(object1, object2, 'name'), [ 'One', 'Two' ]);
  });
});


describe('doesKeyExist()', function () {
  it('should return a boolean true if the object has the key, false otherwise', function () {
    var obj = {bootcamp: 'App Academy', course: 'Bootcamp Prep'};

    assert.equal(doesKeyExist(obj, 'course'), true);
    assert.equal(doesKeyExist(obj, 'name'),  false);
    assert.equal(doesKeyExist(obj, 'bootcamp'),  true);
  });
});


describe('adults()', function () {
  it('should an array of the names of people 18 or older', function () {
    var ppl1 = [
      {name: 'John', age: 20},
      {name: 'Jim', age: 13},
      {name: 'Jane', age: 18},
      {name: 'Bob', age: 7}
    ];

    var ppl2 = [
      {name: 'Rick', age: 60},
      {name: 'Morty', age: 14},
      {name: 'Summer', age: 17},
      {name: 'Beth', age: 34},
      {name: 'Jerry', age: 35}
    ];

    assert.deepEqual(adults(ppl1), ['John', 'Jane']);
    assert.deepEqual(adults(ppl2), ['Rick', 'Beth', 'Jerry']);
  });
});


describe('hasFavoriteFood()', function () {
  it('should return a boolean true if the array value for favoriteFoods has the food, false otherwise', function () {
    var dog = {
      name: 'Fido',
      favoriteFoods: ['chicken', 'sausage', 'scooby snacks']
    };

    var person = {
      name: 'Al',
      favoriteFoods: ['pizza', 'burgers', 'ramen']
    };

    assert.equal(hasFavoriteFood(dog, 'sausage'), true);
    assert.equal(hasFavoriteFood(dog, 'cat food'), false);
    assert.equal(hasFavoriteFood(person, 'burgers'), true);
    assert.equal(hasFavoriteFood(person, 'fish'), false);
  });
});


describe('countScores()', function () {
  it("should return an object of each person's total score", function () {
    var ppl = [ {name: "Anthony", score: 10},
                {name: "Fred", score : 10},
                {name: "Anthony", score: -8},
                {name: "Winnie", score: 12}
    ];
    var result1 = { Anthony: 2, Fred: 10, Winnie: 12 };

    var peeps = [
      {name: "Anthony", score: 2},
      {name: "Winnie", score: 2},
      {name: "Fred", score: 2},
      {name: "Winnie", score: 2},
      {name: "Fred", score: 2},
      {name: "Anthony", score: 2},
      {name: "Winnie", score: 2}
    ];
    var result2 = { Anthony: 4, Fred: 4, Winnie: 6 };

    assert.deepEqual(countScores(ppl), result1);
    assert.deepEqual(countScores(peeps), result2);
  });
});


describe('decomposingFunctions', function () {
  it ("isPrime() should return a boolean true if number is prime, false otherwise", function () {
    assert.equal(isPrime(2), true);
    assert.equal(isPrime(1693), true);
    assert.equal(isPrime(15), false);
    assert.equal(isPrime(303212), false);
  });

  it ("firstNPrimes() should return an array of the first n primes", function () {
    assert.deepEqual(firstNPrimes(0), []);
    assert.deepEqual(firstNPrimes(1), [2]);
    assert.deepEqual(firstNPrimes(4), [2, 3, 5, 7]);
  });

  it ("sumOfNPrimes() should return the sum of the first n primes", function () {
    assert.equal(sumOfNPrimes(0), 0);
    assert.equal(sumOfNPrimes(1), 2);
    assert.equal(sumOfNPrimes(4), 17);
  });
});
