## Objects

An object is a data structure that stores other data, similar to how an array stores elements. Objects
associate keys with values. Keys are always strings while values can be any
data type: numbers, strings, functions, arrays, objects, anything!

Objects, however, differ from arrays in two important ways:

* Instead of indexing with numbers, objects are indexed with keys (which are always strings).

* Order is not guaranteed. When you iterate through the elements in an object,
they may not be in the same order they were entered in unlike arrays. But like arrays, the only
way to access the value in an object is through indexing.

Objects are defined by curly brackets `{}`. Let's open up the console and let's make
some objects.

```js
> var dog = {};
undefined

> dog
{}
```

### Bracket Notation
We can create new key-value pairs using bracket notation `[]` and assignment `=`.
Notice that the key inside the brackets is represented with a string:

```js
> dog['name'] = 'Rover'
'Rover'

> dog['type'] = 'Husky'
'Husky'

> dog['name']
'Rover'

> dog['type']
'Husky'

> dog
{name: 'Rover', type: 'Husky'}
```

When we enter `dog['name']`, we are using `'name'` as our key. The `'name'` key
then "unlocks" the corresponding value to give us our `dog`'s name, `'Rover'`!

### `undefined` Values in Objects
What happens if we try to access a key that is not inside the object?

```js
> dog
{name: 'Rover', type: 'Husky'}

> dog['color']
undefined
```

**If we try to access a key that is not inside an object we get `undefined`**. This
falls right into place with our understanding of where `undefined` shows up in
JavaScript. It's the common default value of a lot of things. `undefined` sneaks its
way into unassigned variables, out-of-array elements, and non-existent object values.

Using this knowledge, we can check if a key exists in an object:

```js
> dog
{name: 'Rover', type: 'Husky'}

> dog['name']
'Rover'

> dog['name'] === undefined
false

> dog['age'] === undefined
true
```

### Using Variables as Keys

Hmmm, since we know that we must put a string inside the brackets to use as a key,
what if we used a variable that contains a string? Let's keep playing with the dog
we made above:

```js
> dog
{name: 'Rover', type: 'Husky'}

> var myKey = 'name'
undefined

> myKey
'name'

> dog[myKey]
'Rover'

> dog['name']
'Rover'
```

Aha! Of course we can use a variable as our key. A variable always evaluates to the
value we assigned it. So `dog[myKey]` and `dog['name']` are equivalent. Why is this
useful? We know that variables can change; so now the keys we use for objects can
change!

### Dot Notation
We can also use what's called dot notation `.` to set up our key-value pairs. When
we use dot notation, we don't need to use string quotes as the key:

```js
> dog
{name: 'Rover', type: 'Husky'}

> dog.bark = "Bowowowo";
'Bowowowowo'

> dog.bark
'Bowowowo'

> dog
{ name: 'Rover', type: 'Husky', bark: 'Bowowowowo' }

```

### Bracket vs Dot

Now that we know two ways to access values of an object, when should we use
bracket notation or dot notation? Dot notation is more readable and simpler to write
because we don't have to fiddle with quotation marks. However, bracket notation let's
us use variables that contains the keys.

There are tradeoffs for both, so practice using both! You will learn pretty
quickly that there are tons of ways to write the same thing in JavaScript. These
options are different tools to solve different problems. Have both in your
tool-belt to be a versatile programmer!

Let's look at the difference:

```js
var myDog = {};
myDog.name = 'Fido';

// let's use a variable as our key and some bracket notation...
var myKey = 'name';
console.log(myDog);         // prints `{name: 'Fido'}`
console.log(myDog[myKey]);  // prints `Fido`

// what if we try to use the variable in dot notation...
console.log(myDog.myKey);   // prints `undefined`
```

When we use dot notation to write `myDog.myKey`, `myKey` will
**not be interpreted by JavaScript as a variable**. The text we write after the `.`
will be used as the **literal** key. Remember that if we try to use a key that does
not exist in an object, we get back the default value of `undefined`.

```js
console.log(myDog.myKey);   // prints `undefined`
myDog.myKey = '???';
console.log(myDog);         // prints `{name: 'Fido', myKey: '???'}`
console.log(myDog.myKey);   // prints `???`
// mind === 'blown'
```

### Putting it all together

We can also create an entire object in a single statement:

```js
var myDog = {
  name: 'Fido',
  type: 'Doge',
  bark: 'Rawrrrr',
  age: 2,
  favoriteToys: ['bone', 'ball']
};

console.log(myDog.age); // prints `2`
console.log(myDog.favoriteToys); // prints `['bone', 'ball']`
```

In an object, `keys` will always be strings, but the `values` can be anything data
type we please, like numbers, strings, arrays, etc.. We will even see that a value
can be a function up next!
