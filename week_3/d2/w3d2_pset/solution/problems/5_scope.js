// Predict what this code will print out.
// Check your prediction by running the code in your command line
// with `node problems/4_scope.js`

var bar = "dance";

function foo() {
  bar = 10;

  var innerFoo = function() {
    var bar = 15;
  }

  console.log("2: " + bar); //2: What will bar be on this line?
  innerFoo();
  console.log("3: " + bar); //3: What will bar be on this line?
}

console.log("1: " + bar); //1: What will bar be on this line?
foo();
console.log("4: " + bar); //4: What will bar be on this line?
