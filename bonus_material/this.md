
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
