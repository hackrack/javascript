// Debug this function below so it passes mocha

// Examples:
//
// isMagicNumer(26) //=> true;
// isMagicNumer(50) //=> false;

var magicify = function(number) {
  return (number - 34);
}

var isMagicNumer = function(number) {
  var magicNumb = magicify(number);

  if (magicNumb % 13 === 0 || magicNumb < 0) {
    return true;
  }

  return false;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = isMagicNumer;
