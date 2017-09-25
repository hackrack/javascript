// Debug this function below so it passes mocha

// Examples:
//
// jump(5) //=> "I'm jumping 5 feet high!";
// jump(12) //=> "I'm jumping 12 feet high!";

function howHigh(height) {
  return (height + " feet high!");
}

function jump(height) {
  return "I'm jumping " + howHigh(height);
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = jump;
