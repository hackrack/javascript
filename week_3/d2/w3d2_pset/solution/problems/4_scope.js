// Predict what this code will print out.
// Check your prediction by running the code in your command line
// with `node problems/4_scope.js`

var bar = 5;
console.log("1: " + bar); //1: What will bar be on this line?

function foo() {
  var bar = 10;
  console.log("3: " + bar); //3: What will bar be on this line?

  var innerFoo = function() {
    bar = 15;
  }

  console.log("4: " + bar); //4: What will bar be on this line?
}

console.log("2: " + bar); //2: What will bar be on this line?
foo();
console.log("5: " + bar); //5: What will bar be on this line?
